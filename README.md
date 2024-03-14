## Mobile Automation Testing

This repository contains the code and documentation for my Mobile Automation Testing project. The goal of this project is to automate the testing of mobile applications using Appium and WebDriverIO.

### Test Scenarios and Test Steps

The document containing the test scenarios and test steps can be found [here](https://docs.google.com/spreadsheets/d/1qMK4vNMcrKqV_mf_ugMCd-xhjlmhL80rI5rXV3azbSw/edit?usp=sharing).

### Video Recordings

Video recordings of the Mobile Automation Testing process can be found [here](https://drive.google.com/file/d/16ZPTwqRR432wNmYbvtB6nfHPbqcfXcfj/view?usp=sharing).

### Prerequisites

Before you can run the tests, make sure you have the following software installed:

1. Node.js
2. Java SDK and set the JAVA_HOME environment variable
3. Android Studio and set the ANDROID_HOME environment variable
4. Appium Desktop

### Installation

1. Clone this repository to your local machine.
2. Install the required dependencies by running the following command:

   ```
   npm install
   ```

### How to Run

1. Connect your Android or iOS device to your machine.
2. Open the `wdio.conf.js` file and set the desired capabilities according to your device configuration.
3. Run the tests using the following command:

   ```
   npm run wdio
   ```

This will execute the Mobile Automation Testing process and generate the test reports.
