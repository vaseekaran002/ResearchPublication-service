const mongoos = require("mongoose");
const schema = mongoos.Schema;

const paperSchema=new schema(
    {

      title :{
        type: String,
        unique:true,
        required: true,
      },
      domain: {
        type: String,
      },
      yearOfPublication: {
        type: String,
      },
      author: {
        type: String,
      },
      indexing: {
        type: String,
      },
      journalName:{
        type: String,
      },
      externalResources : {
        type: String,
      },
    },
    { timestamps: true }
  );

  const Paper=mongoos.model("Paper",paperSchema);
  module.exports=Paper;