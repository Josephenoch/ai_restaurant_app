# Welcome to your Restaurant App 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```


This app requires a development build because it uses native dependencies. 

2. Start the app

   ```bash
    npx expo prebuild
   ```

2. Start the app

   ```bash
    npx expo ios or npx expo android
   ```



## Dependencies

- React Native
- Expo
- Redux
- React Native QR Code Scanner
- Axios

## Features

- Scan the QR code to visit the restaurany menu page
- View restaurant menu
- Add items to cart
- Remove item from cart
- Place order


## How to use

After starting the project, the system will automatically detect if you're running it on a simulator or live device. If you're running on a simulator, it will simulate the QR Code scanning process and proceed. If you're not, please scan this QR Code:

![restaurant qr code](https://i.ibb.co/7bpF4vy/kenny-ai-qr-code.png)

Also, create an .env file and add this to the url

```bash
EXPO_PUBLIC_API_URL = https://ai-restaurant.onrender.com/
```

