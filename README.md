# Installation:

Go to utils/FirebaseConfig.ts and configure your own Firebase API.

Run `npm install` to download the necessary packages.

Install the Backend of this project from https://github.com/Gameboy612/TARGETS-Cathay-Hackathon-2024-Backend. Then, get the URL of the hosting Flask application, no matter from AWS or from localhost, and type it into `constants/website.ts`.

You may register an account upon starting the application.

We used technologies which allowed us to create custom seat maps using JSON format. You can take a look at it at 
`features/user/plane_seats/components/PlaneSeatsScreen.tsx`.

Technologies used:
1. React Native
2. Firebase for User Management
3. SocketIO for instantaneous updates between accounts
4. Flask for Backend management
5. MongoDB for Database

You can try out with multiple instances of the browser, and it will sync across the devices.