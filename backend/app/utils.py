import numpy as np
from skimage import exposure
import base64
from PIL import Image
from io import BytesIO


def data_uri_to_image(uri):
    print(uri)
    encoded_data = uri.split(',')[1]
    image = base64.b64decode(encoded_data)
    return Image.open(BytesIO(image))


def replace_transparent_background(image):
    image_arr = np.array(image)
    alpha1 = 0
    r2, g2, b2, alpha2 = 255, 255, 255, 255

    red, green, blue, alpha = image_arr[:, :, 0], image_arr[:, :, 1], image_arr[:, :, 2], image_arr[:, :, 3]
    mask = (alpha == alpha1)
    image_arr[:, :, :4][mask] = [r2, g2, b2, alpha2]

    return Image.fromarray(image_arr)


def resize_image(image):
    return image.resize((8, 8), Image.ANTIALIAS)


def white_to_black(image):
    image_arr = np.array(image)
    image_arr[image_arr > 230] = 0
    return Image.fromarray(image_arr)


def reduce_intensity(image):
    image_arr = np.array(image)
    image_arr = exposure.rescale_intensity(image_arr, out_range=(0, 16))
    return Image.fromarray(image_arr)


def to_classifier_input_format(data_uri):
    raw_image = data_uri_to_image(data_uri)
    image_with_background = raw_image.convert('L')
    resized_image = resize_image(image_with_background)
    inverted_image = white_to_black(resized_image)
    low_intensed_image = reduce_intensity(inverted_image)
    flat_image = np.array(low_intensed_image).flatten()
    return np.array([flat_image])
