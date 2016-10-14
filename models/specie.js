var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var speciesSchema = new Schema({
        taxon_id:               { type: Number },
        scientific_name:        { type: String },
        common_name:            { type: String },
        primary_discipline:     { type: String },
        scientific_nme_synonym: { type: String }
        //primary_discipline:     { type: String },
        //scientific_name:        { type: String },
        //common_name:            { type: String },
        //scientific_nme_synonym: { type: String },
        //taxon_id:               { type: Number }
});
// Exporting SpeciesModel
module.exports = mongoose.model('SpeciesModel', speciesSchema, 'species');
