/**
 * Soap service catcher.
 */
const wsdl = require('fs').readFileSync('./diploservice.wsdl','utf8');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { studentdiplomas } = require('../models');

const service = { 

  producerPortService: {
    exampleServicePortSoap11: {      
      diploInfoService: function (args, callback, headers) {

        //console.log('\nIncoming args:', args);
        //console.log('\nIncoming headers:', headers);
        
        (async () => {

          try {
            const diplomasInfo = await studentdiplomas.findOne({
              where: {
                Serie: args.Serie,
                EndingYear: args.EndingYear,
                StudName: { 
                  [Op.like]: args.StudName + '%'
                },        
              },
            })

            if (diplomasInfo) {
              callback({
                'exists': true,
                'Serie': diplomasInfo.dataValues.Serie,
                'StudName': diplomasInfo.dataValues.StudName,
                'Specialty': diplomasInfo.dataValues.Specialty,
                'Institution': diplomasInfo.dataValues.Institution,
                'EndingYear': diplomasInfo.dataValues.EndingYear,
              });
            } else {
              callback({
                'exists': false
              });
            }

          } catch (error) {
            console.error('Error: ', error);
          } 

        }) ();

      }
    },
  },
} 

module.exports = { wsdl, service };
