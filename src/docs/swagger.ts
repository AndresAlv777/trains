import dotenv from "dotenv";
import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

dotenv.config();

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "Documentación de API",
        version: "1.0.0",
    },
    servers: [
        {
            url: `http://localhost:${(process.env.NODE_PORT ?? 3000)}`,
            description: "Development server"
        },
        {
            url: `https://technical-test-backend-wandering-field-2655-rough-glitter-1482.fly.dev`,
            description: "Test Server"
        }
    ],
    components: {
        /*
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        */
        schemas: {
            Train: {
                type: "object",
                properties: {
                    color: {
                        type: "String",
                        example: "Green"
                    },
                    doorNumber: {
                        type: "Number",
                        example: 10
                    },
                    type: {
                        type: "String",
                        example: "Linea 1"
                    },
                    trainCars: {
                        type: "Number",
                        example: 4
                    },
                    trainCapacity: {
                        type: "Number",
                        example: 1200
                    },
                    chairsNumber: {
                        type: "Number",
                        example: 500
                    },
                    code: {
                        type: "String",
                        example: "698"
                    },
                    isActive: {
                        type: "boolean",
                        example: true
                    }
                }
            },
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: [
        "./dist/modules/train/routes/*.js",
    ]
}

export default swaggerJSDoc(swaggerOptions);
