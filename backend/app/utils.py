import numpy as np
from skimage import exposure
import base64
from PIL import Image
from io import BytesIO


def data_uri_to_image(uri):
    encoded_data = uri.split(',')[1]
    image = base64.b64decode(encoded_data)
    return Image.open(BytesIO(image))


def replace_transparent_background(image):
    image_arr = np.array(image)

    if len(image_arr.shape) == 2:
        return image

    alpha1 = 0
    r2, g2, b2, alpha2 = 255, 255, 255, 255

    red, green, blue, alpha = image_arr[:, :, 0], image_arr[:, :, 1], image_arr[:, :, 2], image_arr[:, :, 3]
    mask = (alpha == alpha1)
    image_arr[:, :, :4][mask] = [r2, g2, b2, alpha2]

    return Image.fromarray(image_arr)


def crop_image_frame(image, color=255):
    image_arr = np.array(image)
    cropped_image_arr = image_arr[~np.all(image_arr == color, axis=1)]
    cropped_image_arr = cropped_image_arr[:, ~np.all(cropped_image_arr == color, axis=0)]
    return Image.fromarray(cropped_image_arr)


def pad_image(image, height=0, width=30, color=255):
    return Image.fromarray(np.pad(
        np.array(image),
        ((height, height), (width, width)),
        'constant',
        constant_values=color
    ))


def resize_image(image):
    return image.resize((8, 8), Image.ANTIALIAS)


def white_to_black(image):
    image_arr = np.array(image)
    image_arr[image_arr > 230] = 0
    return Image.fromarray(image_arr)


def to_flat_grayscaled_image_arr(image):
    image_arr = np.array(image)
    image_arr = exposure.rescale_intensity(image_arr, out_range=(0, 16))
    return image_arr.flatten()


def to_classifier_input_format(data_uri):
    raw_image = data_uri_to_image(data_uri)
    image_with_background = replace_transparent_background(raw_image)
    grayscaled_image = image_with_background.convert('L')
    cropped_image = crop_image_frame(grayscaled_image)
    padded_image = pad_image(cropped_image)
    inverted_image = white_to_black(padded_image)
    resized_image = resize_image(inverted_image)
    return np.array([
        to_flat_grayscaled_image_arr(resized_image)
    ])
