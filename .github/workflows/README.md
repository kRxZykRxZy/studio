# Firebase App Hosting Deployment

This project is configured for Firebase App Hosting.

To enable automatic deployments on every push to your `main` branch, you need to connect this GitHub repository to your Firebase App Hosting backend.

## Steps:

1.  **Push your code to this GitHub repository.** Make sure your repository is up-to-date with the project files.
2.  **Go to the Firebase Console:** Navigate to your Firebase project.
3.  **Select your App Hosting backend:** Find the App Hosting backend you created for this project.
4.  **Connect to GitHub:** In the backend's dashboard, you will find an option to "Connect GitHub repository".
5.  **Authorize and Select:** Follow the on-screen instructions to authorize Firebase to access your GitHub account and select this repository (`kRxZykRxZy/CodeConnect-main`).

Once connected, Firebase App Hosting will automatically build and deploy your application whenever you push new changes to your `main` branch. The build process is configured by the `apphosting.yaml` file in the root of this project.
