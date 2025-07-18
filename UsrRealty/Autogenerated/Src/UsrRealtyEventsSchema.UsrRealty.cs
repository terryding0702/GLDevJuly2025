namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f7006ecc-781c-41ef-b96e-d2713429e584");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ab983074-305b-41d1-a0ec-bcc373bddc78");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,79,227,64,12,189,35,241,31,172,136,67,34,85,35,184,46,11,210,182,234,34,36,180,72,52,112,65,123,152,78,220,48,171,249,136,198,147,66,65,252,247,117,50,233,182,164,172,132,47,201,216,207,207,239,89,118,210,34,53,82,33,148,24,130,36,191,138,98,230,221,74,215,109,144,81,123,119,124,244,118,124,4,28,45,105,87,195,98,67,17,237,249,126,106,191,209,90,239,254,91,12,40,230,46,234,168,145,190,130,17,243,53,186,184,133,62,246,233,77,159,187,209,44,194,97,200,23,234,9,173,252,197,30,224,2,178,123,10,119,40,77,220,100,197,239,212,212,180,75,163,21,40,35,137,32,213,62,161,129,111,48,149,132,159,84,18,203,176,128,61,66,191,102,201,186,66,88,123,93,193,173,91,200,53,27,201,253,242,15,170,8,132,174,194,48,129,68,56,197,21,187,234,105,127,132,154,0,139,29,221,30,115,23,75,86,33,254,177,109,105,176,56,255,8,75,188,16,122,63,108,60,79,137,34,53,140,192,21,42,109,165,129,38,104,213,109,41,117,137,43,140,229,166,193,106,230,77,107,221,131,52,45,126,31,160,151,121,6,217,120,166,94,65,158,40,46,225,236,116,27,197,71,208,200,78,23,40,174,105,38,157,66,131,21,79,143,161,69,102,62,196,81,12,221,41,240,49,146,172,177,68,219,24,25,59,189,14,159,225,198,43,105,244,171,92,26,92,244,184,124,112,113,79,24,248,90,29,111,157,79,85,220,33,249,54,40,6,249,192,44,19,56,156,211,197,238,80,210,133,101,19,200,14,70,144,232,151,114,77,165,247,83,93,167,87,86,136,210,15,18,138,47,248,96,253,41,33,126,250,96,101,204,71,254,120,240,153,56,157,158,28,172,187,139,248,20,252,115,239,127,254,162,176,233,28,110,251,199,240,247,221,115,248,229,207,251,95,29,182,67,102,220,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("87fc0728-a67f-2abc-ba53-b93d1d67858d"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("ab983074-305b-41d1-a0ec-bcc373bddc78"),
				CreatedInSchemaUId = new Guid("f7006ecc-781c-41ef-b96e-d2713429e584"),
				ModifiedInSchemaUId = new Guid("f7006ecc-781c-41ef-b96e-d2713429e584")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f7006ecc-781c-41ef-b96e-d2713429e584"));
		}

		#endregion

	}

	#endregion

}

