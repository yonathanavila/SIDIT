// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./TypesLibrarie/Types.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Main is Ownable {

    bool public StatusPaused;

    /// @dev Mapping to identify the sender role
    mapping(address => bool) isFireman;

    /// @dev Mapping to indentify the report
    mapping(uint => Types.SIDIType) IdentifyReport;

    /// @dev Modifier to identify the status pausable of the contract
    modifier Status(){
        require(StatusPaused == true, "The contract is paused you can't call this function");
        _;
    }

    /// @dev Modifier to validate the user rol
    modifier onlyFiremen (){
        require(isFireman[msg.sender] == false, "You don't have access to this function");
        _;
    }

    constructor(){
        StatusPaused = false;
    }

    /** 
     * @dev Function to register a new Report 
     * @param _Name This is the name of the person that report the incident
     * @param _PhoneNumber This is the phone number of the person that call to 611 or firement station
     * @param _DescriptionEvent This is the description of the Event
     * @param _Location This is the location of the event
     * @param _ReportTime Time to the report
     * @param _AttendedCall How attend the call
     * @param _DisplacementFiremenTime What time the firemen displacement already
     * @param _Observations This is the Observations of the event
     * @param _FiremenSign This is the sign of the firement that attended the call
     * @param _Date this is the date of the event
     */
    function FillOutReport(
            string memory _Name,
            string memory _PhoneNumber,
            string memory _DescriptionEvent, 
            string memory _Location,
            string memory _ReportTime,
            string memory _AttendedCall,
            string memory _DisplacementFiremenTime,
            string memory _Observations,
            string memory _FiremenSign,
            string memory _Date
        ) 
        public 
        view
        onlyFiremen
        Status
    {

        Types.SIDIType memory report;
        report.Name = _Name;
        report.PhoneNumber = _PhoneNumber; 
        report.DescriptionEvent = _DescriptionEvent; 
        report.Location =_Location;
        report.ReportTime = _ReportTime;
        report.AttendedCall = _AttendedCall;
        report.DisplacementFiremenTime = _DisplacementFiremenTime;
        report.Observations = _Observations;
        report.FiremenSign = _FiremenSign;
        report.Date = _Date;
    }

    /// @dev Set the firemen rol
    function SetFiremenRol() public onlyOwner {
        isFireman[msg.sender] = true;
    }

    /// @dev Revoke the firemen rol
    function RevokeFiremenRol() public onlyOwner{
        isFireman[msg.sender] = false;
    }

    /// @dev Pause the contract calls
    function PuaseContract() public onlyOwner{
        StatusPaused = true;
    }

    /// @dev Unpause the contract calls
    function UnpauseContract() public onlyOwner{
        StatusPaused = false;
    }



}