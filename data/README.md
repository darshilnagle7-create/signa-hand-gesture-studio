# Sign Language Digits dataset

This project bundles the 2,062 sample, 64 × 64 grayscale ASL digits dataset by Arda Mavi and Zeynep Dikle, retrieved from the public `mdc2018-diggers/Sign-Language-Digits-Dataset` mirror (`npy_dataset/X.npy` and `npy_dataset/Y.npy`). The source dataset is published under CC BY-SA 4.0. This attribution and license note applies to the dataset files; the app code is separate.

- Dataset page: https://www.kaggle.com/datasets/ardamavi/sign-language-digits-dataset
- Original project and author details: https://github.com/ardamavi/Sign-Language-Digits-Dataset
- Public mirror used for the bundled `.npy` files: https://github.com/mdc2018-diggers/Sign-Language-Digits-Dataset/tree/master/npy_dataset
- Citation: Mavi, A. (2020). “A New Dataset and Proposed Convolutional Neural Network Architecture for Classification of American Sign Language Digits.” arXiv:2011.08927.

## How the app uses it

Open **Add training data → Load dataset** to load the bundled files into browser memory. The live demo compares a hand crop to the labeled image examples with nearest-neighbor matching. The camera capture flow separately saves normalized 21-landmark examples in local browser storage and uses them for personalized k-nearest-neighbor predictions.

The CSV importer accepts only landmark rows: `label` plus 63 numeric values (21 landmarks × x/y/z). The image dataset itself uses NumPy arrays (`X.npy` shape 2,062 × 64 × 64; `Y.npy` shape 2,062 × 10 one-hot labels). Sign Language MNIST is an alphabet dataset and is not compatible with this ASL digit model.
