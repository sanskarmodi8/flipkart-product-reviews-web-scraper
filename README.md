# Flipkart Product Reviews Web Scraper

This repository contains the code for a web application that allows you to scrape product reviews from Flipkart by entering the product name. You can access the deployed application [here](https://sanskarmodi8.github.io/flipkart-product-reviews-web-scraper/).

## Table of Contents
- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## About the Project

The Flipkart Product Reviews Web Scraper is a web application that allows users to search for a product by entering its name and then scrape and display its reviews from Flipkart. This project is built using web scraping techniques and technologies such as Python, Flask, and ReactJS.

Key features of this application include:

- User-friendly interface: A simple and intuitive interface that allows users to enter the product name and initiate the scraping process.
- Real-time scraping: The application performs real-time web scraping on Flipkart to retrieve the latest product reviews.
- Clean and organized presentation: Reviews are displayed in an organized and readable format for easy analysis.

## Getting Started

To run this project locally or contribute to its development, follow the steps below:

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- Python 3.x
- Flask
- Beautiful Soup 4
- Requests

You can install the required Python packages using `pip`. For example:

```bash
pip install flask beautifulsoup4 requests
```

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sanskarmodi8/flipkart-product-reviews-web-scraper.git
```

2. Change the directory to the project folder:

```bash
cd flipkart-product-reviews-web-scraper
```

3. Run the application locally:

```bash
python app.py
```

4. Open your web browser and access the application at `http://localhost:5000`.

## Usage

1. Open the web application in your web browser.

2. Enter the name of the product for which you want to scrape reviews.

3. Click the "Search" or "Scrape Reviews" button.

4. The application will scrape Flipkart for reviews of the specified product and display them on the screen.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.

3. Make your changes and commit them with meaningful commit messages.

4. Push your changes to your forked repository.

5. Create a pull request to merge your changes into the main repository.
