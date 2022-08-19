import toJS from 'mobx'


class SchemaGenerator {
  hello(){
    console.log("Hello World");
  }

  generate(items){
    const jsonSchema = {
          "title": "A registration form",
          "description": "A simple form example.",
          "type": "object",
          "required": [],
          "properties": {}
    }
    console.log("In generate method")
    let cpt = 1
    items.map ((item) => {
      console.log(item)
      jsonSchema.properties[item.sysname] = {
        "type": item.type,
        "title": item.label,
        "sysname": item.sysname,
        "propertyOrder": cpt
      }
      if(item.checked) jsonSchema.required.push(item.sysname);

      cpt++;
    })

    //console.log(JSON.stringify(jsonSchema).replace(/"/g, "'"));

    return JSON.stringify(jsonSchema).replace(/"/g, "'");
  }
}



export const schemaGenerator = new SchemaGenerator();
