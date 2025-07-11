define("UsrRealtyTypeListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DataGrid_rwxg3wb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 10,
						"row": 1,
						"rowSpan": 11
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_rwxg3wb",
					"primaryColumnName": "DataGrid_rwxg3wbDS_Id",
					"columns": [
						{
							"id": "5a572f31-b8f8-fd36-a9df-61769d363876",
							"code": "DataGrid_rwxg3wbDS_Name",
							"caption": "#ResourceString(DataGrid_rwxg3wbDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "a66ebfa9-526b-529b-9ae9-5c98490d6f04",
							"code": "DataGrid_rwxg3wbDS_Name",
							"caption": "#ResourceString(DataGrid_rwxg3wbDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "95667758-8905-d969-ebd2-922548799ea5",
							"code": "DataGrid_rwxg3wbDS_UsrMyColor",
							"caption": "#ResourceString(DataGrid_rwxg3wbDS_UsrMyColor)#",
							"dataValueType": 18
						},
						{
							"id": "ade42bde-9272-f965-9073-dfaf7e12b372",
							"code": "DataGrid_rwxg3wbDS_Description",
							"caption": "#ResourceString(DataGrid_rwxg3wbDS_Description)#",
							"dataValueType": 28
						},
						{
							"id": "95ee6326-8115-e407-2c52-3cfaec544a4f",
							"code": "DataGrid_rwxg3wbDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_rwxg3wbDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_rwxg3wb": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_rwxg3wbDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_rwxg3wbDS_Name": {
									"modelConfig": {
										"path": "DataGrid_rwxg3wbDS.Name"
									}
								},
								"DataGrid_rwxg3wbDS_UsrMyColor": {
									"modelConfig": {
										"path": "DataGrid_rwxg3wbDS.UsrMyColor"
									}
								},
								"DataGrid_rwxg3wbDS_Description": {
									"modelConfig": {
										"path": "DataGrid_rwxg3wbDS.Description"
									}
								},
								"DataGrid_rwxg3wbDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_rwxg3wbDS.CreatedOn"
									}
								},
								"DataGrid_rwxg3wbDS_Id": {
									"modelConfig": {
										"path": "DataGrid_rwxg3wbDS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"DataGrid_rwxg3wbDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "UsrRealtyType",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"UsrMyColor": {
										"path": "UsrMyColor"
									},
									"Description": {
										"path": "Description"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});