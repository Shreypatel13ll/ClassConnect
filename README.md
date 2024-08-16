## Getting Started

### Prerequisites

- Node.js
- PostgreSQL (Hosted on diditalOcean droplet)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/classconnect.git
    cd classconnect
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:

    ```plaintext
    PORT=3001

    DB_USER=postgres
    DB_HOST=64.227.157.182
    DB_NAME=postgres
    DB_PASSWORD=getmeout
    DB_PORT=5432

    JWT_SECRET=eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcdefefsefsrgb
    ```

### Scripts

- **Development:** Start the development server with Nodemon.

    ```bash
    npm run dev
    ```

- **Testing:** Run unit tests using Jest.

    ```bash
    npm run test
    ```

- **Build:** Compile TypeScript code (if applicable).

    ```bash
    npm run build
    ```
