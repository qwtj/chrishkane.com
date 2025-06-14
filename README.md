# chrishkane.com

This repository contains the source code for [chrishkane.com](https://chrishkane.com). It's a website built with React.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** A standard library for routing in React applications.
*   **React DOM:** Provides DOM-specific methods that are useful at the top level of your app.
*   **React Scripts:**  A set of scripts and configurations optimized for create-react-app.
*   **Testing Library:** A set of utilities that encourages good testing practices.

## Project Structure

The project follows a standard Create React App structure.  Here's a high-level overview:

*   `src/`: Contains the main application code.
    *   `App.js`: The root component of the application.
    *   `index.js`: The entry point of the application.
    *   `components/`: Directory to hold reusable React components (This would be automatically present if the project had custom components).
    *   `pages/`:  Directory to hold the website's different page components (this would be automatically present if the project had multiple pages).
*   `public/`:  Contains static assets like `index.html`, images, and other files.
*   `s3/`: Contains AWS CloudFormation template for deploying the website.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd chrishkane.com
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm start  # or yarn start
    ```

    This will start the development server at `http://localhost:3000`.

## Available Scripts

*   `npm start`: Runs the app in development mode.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.
*   `npm build`: Builds the app for production to the `build` folder.  It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.  Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
*   `npm test`: Runs the test runner in the interactive watch mode.
*   `npm eject`: **Note: This is a one-way operation. Once you `eject`, you can't go back!**  If you aren't satisfied with the default build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

    You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment

The included `deploy.sh` script is designed to automate deployment to AWS S3 using CloudFormation.

**Prerequisites:**

*   AWS CLI installed and configured.
*   AWS credentials configured with necessary permissions to create and manage CloudFormation stacks, S3 buckets, and IAM roles.

**Usage:**

```bash
./deploy.sh [bucket_name] [stack_name] [aws_region]
```

*   `bucket_name` (optional):  The name of the S3 bucket to deploy to (defaults to `chrishkane.com`).
*   `stack_name` (optional): The name of the CloudFormation stack to create or update (defaults to `s3-stack`).
*   `aws_region` (optional): The AWS region to deploy to (defaults to the region configured in your AWS CLI).

**Example:**

```bash
./deploy.sh my-custom-bucket my-website-stack us-west-2
```

**Explanation:**

The `deploy.sh` script does the following:

1.  Determines the base directory of the project.
2.  Uses the provided or default values for the bucket name, stack name, and AWS region.
3.  Constructs the path to the CloudFormation template (`s3/web.yaml`).
4.  Executes the `aws cloudformation deploy` command to create or update the CloudFormation stack.
    *   It passes the bucket name and region as parameters to the CloudFormation template.
    *   It specifies `CAPABILITY_IAM` as a capability, which is required if the template creates or modifies IAM roles or policies.

**Important Considerations for CloudFormation Deployment:**

*  **S3 Bucket Name:**  The S3 bucket name must be globally unique across all AWS accounts.
*  **CloudFormation Template:** Review the `s3/web.yaml` CloudFormation template to understand the resources that will be created or modified.
*  **Permissions:** Ensure your AWS credentials have sufficient permissions to create and manage CloudFormation stacks, S3 buckets, and IAM roles. The `CAPABILITY_IAM` parameter indicates that the stack potentially creates or modifies IAM resources, so appropriate IAM permissions are essential.
*  **CloudFront Distribution:** You may need to manually invalidate the CloudFront cache after deployment if you have a CloudFront distribution configured for your S3 bucket to ensure users see the latest version of your website.  The CloudFormation template *should* handle this, but verify after the initial deploy.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

