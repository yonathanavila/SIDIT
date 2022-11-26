// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./TypeLibraries/Types.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Main is Ownable {
    bool public StatusPaused;

    /// @dev event after register report
    event FilledReport(address FiremenAddress, string Name, string HashId);

    /// @dev event to edit existing report
    event EditFilledReport(address FiremenAddress, string Name, string HashId);

    /// @dev Mapping to identify the sender role
    mapping(address => bool) isFireman;

    /// @dev Mapping to identify the Editing report role
    mapping(address => bool) canEditReport;

    /// @dev Mapping to indentify the report
    mapping(string => Types.SIDIType) IdentifyReport;

    /// @dev Modifier to identify the status pausable of the contract
    modifier Status() {
        require(
            !StatusPaused,
            "The contract is paused you can't call this function"
        );
        _;
    }

    /// @dev Modifier to identify the status pausable of the contract
    modifier onlyEditingRol() {
        require(
            canEditReport[msg.sender],
            "You don't have access to this function"
        );
        _;
    }

    /// @dev Modifier to validate the user rol
    modifier onlyFiremen() {
        require(
            isFireman[msg.sender],
            "You don't have access to this function"
        );
        _;
    }

    constructor() {
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
        string memory _HashId,
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
    ) public onlyFiremen Status {
        Types.SIDIType memory report;
        report.Name = _Name;
        report.PhoneNumber = _PhoneNumber;
        report.DescriptionEvent = _DescriptionEvent;
        report.Location = _Location;
        report.ReportTime = _ReportTime;
        report.AttendedCall = _AttendedCall;
        report.DisplacementFiremenTime = _DisplacementFiremenTime;
        report.Observations = _Observations;
        report.FiremenSign = _FiremenSign;
        report.Date = _Date;

        IdentifyReport[_HashId] = report;

        emit FilledReport(msg.sender, IdentifyReport[_HashId].Name, _HashId);
    }

    /// @dev Edit report by Firemen Admin
    function EditReport(
        string memory _HashId,
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
    ) public onlyEditingRol Status {
        Types.SIDIType memory report;
        report.Name = _Name;
        report.PhoneNumber = _PhoneNumber;
        report.DescriptionEvent = _DescriptionEvent;
        report.Location = _Location;
        report.ReportTime = _ReportTime;
        report.AttendedCall = _AttendedCall;
        report.DisplacementFiremenTime = _DisplacementFiremenTime;
        report.Observations = _Observations;
        report.FiremenSign = _FiremenSign;
        report.Date = _Date;

        IdentifyReport[_HashId] = report;

        emit EditFilledReport(
            msg.sender,
            IdentifyReport[_HashId].Name,
            _HashId
        );
    }

    /**
     * @dev Search Report by report hash id
     * @param _HashId This is the hash if of the report to consult
     **/
    function GetRepor(string memory _HashId)
        public
        view
        returns (Types.SIDIType memory)
    {
        return IdentifyReport[_HashId];
    }

    /**
     * @dev Set the firemen rol
     * @param _FiremenAddress This is  the addres to set as Firemen rol
     **/
    function SetFiremenRol(address _FiremenAddress) public onlyOwner {
        isFireman[_FiremenAddress] = true;
    }

    /**
     * @dev Revoke the firemen rol
     * @param _FiremenAddress This function revoke the Firemen rol
     **/
    function RevokeFiremenRol(address _FiremenAddress) public onlyOwner {
        isFireman[_FiremenAddress] = false;
    }

    /**
     * @dev Set the Editing rol
     * @param _FiremenAddress This is  the addres to Edit a report
     **/
    function SetEditingRol(address _FiremenAddress) public onlyOwner {
        canEditReport[_FiremenAddress] = true;
    }

    /**
     * @dev Revoke the Editing rol
     * @param _FiremenAddress This function revoke the Editing rol
     **/
    function RevokeEditingRol(address _FiremenAddress) public onlyOwner {
        canEditReport[_FiremenAddress] = false;
    }

    /**
     * @dev Verify the rol of the sender
     **/
    function IsFiremen() public view returns (bool) {
        return isFireman[msg.sender];
    }

    /// @dev Pause the contract calls
    function PuaseContract() public onlyOwner returns (bool) {
        StatusPaused = true;
        return StatusPaused;
    }

    /// @dev Unpause the contract calls
    function UnpauseContract() public onlyOwner returns (bool) {
        StatusPaused = false;
        return StatusPaused;
    }
}
