const { debugPort } = require('process');

fs = require('fs');

/*
 This file generates DTOs (Data Transfer Objects) between BE and FE, and saves 
 the file at both folders.
 It also creates a NestJS/Mongoose schema for them.
 
 You can run this script by using the npm script 'gen_dto' (npm run gen_dto),
 or by using node: node dtos/generate.js

 Note: All DTO changes must be from here.
*/

const warning = "/* WARNING!!! This file is auto-generated! Don't edit here! */\n";

const dtos = [
    {
        name: "Comment", // comments of the content pages
        beFolder: "be/src/comment",
        feFolder: "FE/src/app/books/comments",
        fields: [
            { name: "title", },
            { name: "content", },
            { name: "authorDisplayName" },
            { name: "date", type: "number" }
        ],
        needScheme: true
    },
    {
        name: "LoginData", // for login
        beFolder: "be/src/auth",
        feFolder: "FE/src/app/auth",
        fields: [
            { name: "email", },
            { name: "password", },
        ],
        needScheme: false
    },
    {
        name: "User", // all user data
        beFolder: "be/src/auth",
        feFolder: "FE/src/app/auth",
        fields: [
            { name: "email", },
            { name: "passwordHash", },
            { name: "firstName" },
            { name: "surname" },
            { name: "bookmarkURL" },
            { name: "signupDate", type: "number" },
            { name: "lastLoginDate", type: "number" },
        ],
        needScheme: true
    },
];

function createFolderIfNeeded(folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
}

function create() {
    dtos.forEach((dto) => {
        // create folders is needed
        createFolderIfNeeded(dto.beFolder);
        createFolderIfNeeded(dto.feFolder);

        // assign default values
        dto.fields.forEach((f) => {
            if (!f.type) f.type = "string";
        });

        // create dtos
        console.log(`creating DTO and schema for ${dto.name}`);
        var ts = warning;
        ts += `export class ${dto.name}Dto {\n`;
        if (dto.needScheme) ts += '\t_id: number;\n'; // the mongo db _id value
        dto.fields.forEach((f) => {
            ts += `\t${f.name}: ${f.type};\n`;
        })
        ts += "};\n";

        const files = [
            `${dto.beFolder}/${dto.name}.dto.ts`,
            `${dto.feFolder}/${dto.name}.dto.ts`
        ]
        files.forEach((file) => {
            fs.writeFile(file, ts, function (err, data) {
                if (err) {
                    return console.log(err);
                }
            });
        })

        // create mongoose scheme
        if (dto.needScheme) {
            ts = warning;
            // some headers
            ts += "import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\n";
            ts += "import { Document } from 'mongoose';\n";
            ts += `type ${dto.name}Document = ${dto.name} & Document;\n`;
            ts += `export default ${dto.name}Document;\n`;

            dto.fields = dto.fields.filter((f) => f.name != 'id');
            ts += `@Schema()\nexport class ${dto.name} {\n`;
            dto.fields.forEach((f) => {
                ts += '\t@Prop()\n';
                ts += `\t${f.name}: ${f.type};\n`;
            });
            ts += "};\n";

            ts += `export const ${dto.name}Schema = SchemaFactory.createForClass(${dto.name});\n`;

            const schemaFile = `${dto.beFolder}/${dto.name}.schema.ts`;
            fs.writeFile(schemaFile, ts, function (err, data) {
                if (err) {
                    return console.log(err);
                }
            });
        }
    });
}

create();