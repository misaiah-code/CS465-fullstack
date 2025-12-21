# CS465 Final Journal

### Architecture

An angular project is structured around a component-based client-side architecture designed to support a single-page application (SPA). The project is typically organized into modules, components, services, and routing files. Components control views and user interaction, services handle shared logic and HTTP communication, and routing manages navigation without reloading the page. This structure allows the application to load once in the browser and dynamically update content in response to user actions. 

In contrast, an Express project follows a server-side request-response architecture. Its structure is centered on routes, controllers, and models. Routes define API endpoints, controllers contain the logic for handling requests, and models manage data access. Unlike Angular, Express does not manage the UI, it exposes RESTful endpoints that respond with data (like JSON) and relies on a client application, such as an SPA, to consume and present the data. 

The backend used a NoSQL MongoDB database because of its flexibility and ability to scale horizontally. 

### Functionality

JSON (JavaScript Object Notation) serves as a data exchange format between the frontend and backend. While JSON resembles JavaScript objects in syntax, it is purely a data format and does not include functions or methods. 

The TripCardComponent and TripListingComponent were refactored to modularize the UI. This approach reduced code duplication and ensured consistent behavior across the application. Benefits of reusable components include improved scalabilty, consistency, and maintainability. 

### Testing
My understanding of Methods, Endpoints, and Security in a fullStack application are: 
- Methods - HTTP methods (GET, POST, PUT, DELETE) define the type of interaction with the database.
- Endpoints - Define specific API routes for resource manipulation. 
- Security - JWT-based authentication ensures that sensitive routes are accessible only to authorized users.

### Reflection

This course has vastly elevated my professional skills and assisted in allowing me to more clearly define my career goals and options (when compared to what I indicated in my first discussion post). Due to this course, I've gained hands on experience in developing full stack applications (building both the front and backend components using common industry standard tools), implementing security features (how to utlize and understand JWT based authentication), database management, and building, and understanding, SPA's. 
