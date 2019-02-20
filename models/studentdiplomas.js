/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('studentdiplomas', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		Serie: {
			type: DataTypes.STRING(11),
			allowNull: false,
			defaultValue: '0',
			unique: true
		},
		StudName: {
			type: DataTypes.STRING(160),
			allowNull: true,
			defaultValue: '0'
		},
		Specialty: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'NULL'
		},
		Institution: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '0'
		},
		EndingYear: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'studentdiplomas'
	});
};
