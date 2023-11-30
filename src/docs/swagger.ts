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
            description: "Dev server"
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        schemas: {
            Authentication: {
                type: "object",
                properties: {
                    email: {
                        type: "String",
                        example: "prueba@gmail.com"
                    },
                    password: {
                        type: "String",
                        example: "12345678"
                    }
                }
            },
            User: {
                type: "object",
                properties: {
                    name: {
                        type: "String",
                        example: "Pedrito"
                    },
                    lastname: {
                        type: "String",
                        example: "Alcachofa"
                    },
                    email: {
                        type: "String",
                        example: "pedro@gmail.com"
                    },
                    password: {
                        type: "String",
                        example: "316458dpsdd"
                    },
                    cellphone: {
                        type: "Number",
                        example: 984612564
                    },
                    isActive: {
                        type: "Boolean",
                        example: true
                    }
                }
            },
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
        "src/modules/auth/routes/*.ts",
        "src/modules/user/routes/*.ts",
        "src/modules/train/routes/*.ts",
    ]
}

export default swaggerJSDoc(swaggerOptions);
