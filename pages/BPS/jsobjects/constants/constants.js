export default {
	log_template: 'await log({action_type: "", ref_id: "", ref_id_type: "", change_json: JSON.stringify({}) })',
	update: "Update",
	add: "Add",
	auto_segmentation_omni_check_api: "Auto Segmentation Omni-Check API",
	auto_segmentation_claims_api: "Auto Segmentation Claims API",
	add_bps_maximizer_patient: "Add BPS Maximizer Patient",
	update_bps_segmentation_status: "Update BPS Segmentation Status",
	update_at_risk_mp_aap: "Update At Risk MP AAP",
	link_patient_to_provider: "Link Patient to Provider",
	provider_pw_reset: "Reset Provider Password",
	patient_pw_reset: "Reset Patient Password",
	patient_card_registration: "Patient Paysign Card Registration",
	update_provider_preferred_payment_method: "Update Provider Payment Method",
	update_patient_enrollment_status: "Update Patient Enrollment Status",
	update_paysign_card_status_active: "Update Card Status to Active at Paysign",
	update_paysign_card_status_inactive: "Update Card Status to Inactive at Paysign",
	add_provider: "Add Provider",
	update_provider: "Update Provider",
	add_provider_user: "Add Provider User Credentials",
	update_provider_user: "Update Provider User Credentials",	
	update_provider_ach: "Update Provider ACH",	
	add_patient: "Add Patient",
	update_patient: "Update Patient",
	add_patient_user: "Add Patient User Credentials",
	update_patient_user: "Update Patient User Credentials",		
	update_patient_member_group: "Update Patient Member Group",		
	update_bps_at_risk_for_mp_aap: "Update BPS At Risk For MP AAP", 
	add_attestation: "Add Provider Attestation",
	update_attestation: "Update Provider Attestation",
	add_notes: "Add Patient Notes",
	update_notes: "Update Patient Notes",
	omnicheck: "Run Omni Check",
	bps_omni_check_api: "BPS OMNI-CHECK API",
	bps_claims_api: "BPS CLAIMS API",
	add_insurance: "Add Insurance",
	update_insurance: "Update Insurance",
	npi: "Provider NPI",
	provider_id: "Provider ID",
	patient_id: "Patient ID",
	member_id: "Patient Member ID",
	database_id: "Database ID",
	at_risk_for_mp_aap_mapping: {
		"Y|N": 'Maximizer = Y and AAP = N',
		"N|Y": 'Maximizer = N and AAP = Y',
		"N|N": 'Maximizer = N and AAP = N',
		"N|U": 'Maximizer = N and AAP = U',
		"U|U": 'Maximizer = U and AAP = U',
		"NA|NA": 'Maximizer = NA and AAP = NA'		
	},
	indicator_1_mapping: {
		"M1": "PreVail Keyword Match (MP)",
		"M2": "PreVail BPG Match (MP)",
		"M3": "Confirmed by Rep (MP)",
		"M4": "Confirmed by plan level information (MP)",
		"M100": "Payer Portal Message (MP)",
		"M101": "Repeating 30% or 50% coinsurance (MP)",
		"M102": "Repeating copay / 12 or 13 (MP)",
		"A2": "Confirmed by plan level information (AAP)",
		"A100": "Confirmed by Rep (AAP)",
		"A101": "Patient Responsibility is always the remaining accumulators (AAP)",
		"A102": "Patient Responsibility is full cost or full accumulators (AAP)",
		"A103": "Only $5 patient responsibility is applying to accumulators (AAP)",
		"A104": "Payer Portal Message (AAP)",
		"A105": "Confirmed by adjustments to accumulators (AAP)",
		"A107": "High Remaining accumulators (AAP)",
		"B1": "E1 Not Found (BOTH)",
		"B2": "Confirmed by Rep (BOTH)",
		"B3": "Patient Responsibility < $900 (BOTH)",
		"B4": "Accumulators are going down or met (BOTH)",
		"B5": "Need more claims (BOTH)",
		"B6": "Test Claim Not Available or PA Required (BOTH)", 
		"B7": "Grace Fill (BOTH)", 
		"B8": "Out of Network Penalty (BOTH)",
		"B9": "Plan Exclusion - Discounted Rate Applied (BOTH)", 
		"B10": "Discount Card was used (BOTH)",
		"B11": "Indemnity Plan or reimbursed through Major Medical (BOTH)",
		"OTHER": "OTHER (Please fill out At Risk Indicator 3)",
		"B12": "Commercial = N (BOTH)",
		"B13": "No Risk BIN (BOTH)",
		"M5": "Confirmed by historical claims (MP)",
		"A3": "Confirmed by historical claims (AAP)", 
		"B14": "Confirmed by historical claims (BOTH)", 
		"B15": "High copay due to Benefit Cap (BOTH)",
		"A108": "Copayment will not apply towards accumulators (AAP)",
		"B16": "Confirmed by plan level information (BOTH)",
		"B18": "Patient no longer on therapy (BOTH)", 
		"A4": "PreVail BPG Match (AAP)"
	},
	indicator_2_mapping: {
		"M100": "Payer Portal Message (MP)",
		"M101": "Repeating 30% or 50% coinsurance (MP)",
		"M102": "Repeating copay / 12 or 13 (MP)",
		"A100": "Confirmed by Rep (AAP)",
		"A101": "Patient Responsibility is always the remaining accumulators (AAP)",
		"A102": "Patient Responsibility is full cost or full accumulators (AAP)",
		"A103": "Only $5 patient responsibility is applying to accumulators (AAP)",
		"A104": "Payer Portal Message (AAP)",
		// "A105": "Confirmed by adjustments to accumulators (AAP)",
		"A107": "High Remaining accumulators (AAP)",
		"A108": "Copayment will not apply towards accumulators (AAP)",
		"M1": "PreVail Keyword Match (MP)",
		"M2": "PreVail BPG Match (MP)",
		"M3": "Confirmed by Rep (MP)",
		"M4": "Confirmed by plan level information (MP)", 
		"M5": "Confirmed by historical claims (MP)",
		"A1": "Confirmed by adjustments to accumulators (AAP)",
		"A2": "Confirmed by plan level information (AAP)",
		"A3": "	Confirmed by historical claims (AAP)",
		"B1": "E1 Not Found (BOTH)",
		"B2": "Confirmed by Rep (BOTH)",
		"B3": "Patient Responsibility < $900 (BOTH)",
		"B4": "Accumulators are going down or met (BOTH)",
		"B5": "Need more claims (BOTH)",
		"B6": "Test Claim Not Available or PA Required (BOTH)", 
		"B7": "Grace Fill (BOTH)", 
		"B8": "Out of Network Penalty (BOTH)",
		"B9": "Plan Exclusion - Discounted Rate Applied (BOTH)", 
		"B10": "Discount Card was used (BOTH)",
		"B11": "Indemnity Plan or reimbursed through Major Medical (BOTH)",
		"B12": "Commercial = N (BOTH)",
		"B13": "No Risk BIN (BOTH)",
		"B14": "Confirmed by historical claims (BOTH)", 
		"B15": "High copay due to Benefit Cap (BOTH)",
		"B16": "Confirmed by plan level information (BOTH)",
		"OTHER": "OTHER (Please fill out At Risk Indicator 3)",
		// "A108": "Copayment will not apply towards accumulators (AAP)",
		"B18": "Patient no longer on therapy (BOTH)", 
		//# "A4": "PreVail BPG Match (AAP)"
	},
	program_name_and_phone_number_mapping: {
		"AMWINS VARIABLE COPAY PROGRAM": "AMWINS VARIABLE COPAY PROGRAM - 8776461716",
		"ARCHIMEDES": "ARCHIMEDES - 8885045563",
		"BENEFIT PLAN PROTECTION PROGRAM": "BENEFIT PLAN PROTECTION PROGRAM - 8554274682",
		"COPAY ARMOR": "COPAY ARMOR - 8443774246",
		"COPAY MAX": "COPAY MAX - 8558473556",
		"COST RELIEF PROGRAM": "COST RELIEF PROGRAM - 8334190530",
		"COUPON COPAY MAXIMIZATION PROGRAM": "COUPON COPAY MAXIMIZATION PROGRAM - 8447652897",
		"CVS SPECIALTY COPAY CARD PROGRAM": "CVS SPECIALTY COPAY CARD PROGRAM - 8002372767",
		"DIVERSIFIED RX ADVOCATES": "DIVERSIFIED RX ADVOCATES - 8445598332",
		"EPIPHANY": "EPIPHANY - 8775717500",
		"FLEXACCESS": "FLEXACCESS - 8883023618",
		"HIGH IMPACT ADVOCACY PROGRAM": "HIGH IMPACT ADVOCACY PROGRAM - 4027532800",
		"IMPAXRX": "IMPAXRX - 8444672979",
		"INTERCEPT PROGRAM": "INTERCEPT PROGRAM - 8778158395",
		"IPC EVERGREEN ASSISTANCE PROGRAM": "IPC EVERGREEN ASSISTANCE PROGRAM - 6366143126",
		"MAXOR COPAY SOLUTIONS": "MAXOR COPAY SOLUTIONS - 8006870707",
		"MEDIMPACT ASSIST": "MEDIMPACT ASSIST - 8007882949",
		"MEDONE COPAY ASSIST PROGRAM": "MEDONE COPAY ASSIST PROGRAM - 8888846331",
		"PAYD HEALTH": "PAYD HEALTH - 8778697772",
		"PAYER MATRIX": "PAYER MATRIX - 8773056202",
		"PILLARRX": "PILLARRX - 8443774246",
		"PRESCRIPTION OPTIMIZATION PROGRAM": "PRESCRIPTION OPTIMIZATION PROGRAM - 8889025533",
		"PRUDENTRX": "PRUDENTRX - 8005784403",
		"RX ASSIST POWERED BY MEDALISTRX": "RX ASSIST POWERED BY MEDALISTRX - 8556332579",
		"RXFREE4ME": "RXFREE4ME - 8447943733",
		"SAVEONSP": "SAVEONSP - 8339553404",
		"SCRIPT SOURCING": "SCRIPT SOURCING - 4109028811",
		"SHARX": "SHARX - 3144513555",
		"SMART RXASSIST": "SMART RXASSIST - 8006816912",
		"SPECIALTY COPAY SOLUTIONS PROGRAM": "SPECIALTY COPAY SOLUTIONS PROGRAM - 8003689045",
		"VALUE MAX": "VALUE MAX - 8665542673",
		"VARIABLE COPAY PROGRAM": "VARIABLE COPAY PROGRAM - 8003563477",
		"VARIABLE SPECIALTY COPAY PROGRAM": "VARIABLE SPECIALTY COPAY PROGRAM - 8887518126",
		"VERACITY RX": "VERACITY RX - 7704201500",
		"VIVIO": "VIVIO - 8004704034",
		"WELLASSIST": "WELLASSIST - 8778158395",
		"SCAP PROGRAM": "SCAP PROGRAM - 8009939898",
		"THE VARIABLE COPAY PROGRAM": "THE VARIABLE COPAY PROGRAM - 8334399617",
		"REALRX ASSIST": "REALRX ASSIST - 8558694769",
		"RX CAP": "RX CAP - 8888322779",
		"HMAA MANUF COPAYMENT ASSISTANCE PROGRAM": "HMAA MANUF COPAYMENT ASSISTANCE PROGRAM - 8089414622",
		"COST-SHARE ASSISTANCE": "COST-SHARE ASSISTANCE - CALL PBM",
		"HEALTHTRUST": "HEALTHTRUST - CALL PBM",
		"CVS COPAY OPTIMIZATION PROGRAM": "CVS COPAY OPTIMIZATION PROGRAM - 8005528159",
		"VENTEGRA BENEFIT PRESERVATION PROGRAM": "VENTEGRA BENEFIT PRESERVATION PROGRAM - 8773930009",
		"CAAP RX": "CAAP RX - 8007593203",
		"RX HELP CENTERS": "RX HELP CENTERS - 8664789593",
		"NFP RX SOLUTIONS": "NFP RX SOLUTIONS - 8882019175",
		"SMITHRX CONNECT": "SMITHRX CONNECT - 8444545201",
		"EHIM CARES PROGRAM": "EHIM CARES PROGRAM - 8003113446",
		"NOBLE SIGNATURE CARE": "NOBLE SIGNATURE CARE - 8664204041",
		"ELIXIR VARIABLE COPAYMENT": "ELIXIR VARIABLE COPAYMENT - 8774379012",
		"BENECARD PBF ALTERNATIVE FUNDING": "BENECARD PBF ALTERNATIVE FUNDING - 8889070090",
		"ACCESS GUIDANCE": "ACCESS GUIDANCE - 8558473556",
		"BIC ALIGN PROGRAM": "BIC ALIGN PROGRAM - 8003614542",
		"EMPIRX VARIABLE COPAY": "EMPIRX VARIABLE COPAY - 8889072820",
		"BE WELL COPAY SUPPORT": "BE WELL COPAY SUPPORT - 8889072820"
	},
	empty_omni_check_verification_json: {
		"request": {
			"PatientPersonalInfo": {
				"FirstName": "",
				"LastName": "",
				"DateOfBirth": "",
				"Gender": "",
				"City": "",
				"State": "",
				"Zipcode": "",
				"Email": "",
				"PhoneNumber": ""
			},
			"PatientMedicalInsurance": {
				"name": "",
				"plan_type": "",
				"member_number": "",
				"effective_date": "",
				"group_number": "",
				"bin": "",
				"pcn": ""
			},
			"PatientPharmacyInsurance": {
				"payer_name": "",
				"payer_type": "",
				"plan_bin": "",
				"plan_pcn": "",
				"plan_group": "",
				"plan_id": "",
				"plan_start_date": "",
				"plan_end_date": ""
			},
			"CardRequestInfo": {
				"Type": ""
			}
		},
		"response": {
			"CardResponseInfo": {
				"MemberId": "",
				"Bin": "",
				"Pcn": "",
				"Group": "",
				"AllowableUses": "",
				"BenefitAmount": "",
				"Status": ""
			},
			"TransactionInfo": {
				"TransactionId": "",
				"TransactionCreatedDateTime": "",
				"EnrollmentStatus": ""
			},
			"omniCheckInsuranceInfo": [
				{
					"PBMName": "",
					"PlanName": "",
					"BIN": "",
					"PCN": "",
					"Group": "",
					"MemberId": "",
					"PBMPhone": "",
					"PersonCode": "",
					"StartDate": "",
					"EndDate": "",
					"IsCalendarYearPlan": false,
					"PAPhone": "",
					"PAFax": ""
				}
			]
		}
	},

}