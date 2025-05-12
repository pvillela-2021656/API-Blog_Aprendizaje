import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog de Aprendizaje",
            version: "1.0.0",
            description: "API para el blog de aprendizaje",
            contact:{
                name: "Pablo Villela",
                email: "pvillela-2021656@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3009/blogAprendizaje/v1"
            }
        ]
    },
    apis:[
        "./src/Auth/auth.routes.js",
        "./src/publication/publication.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi };
