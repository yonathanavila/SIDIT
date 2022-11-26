// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.7.0 <0.9.0;

/// @title SIDIT Types to interact with Solidity.
library Types {
    struct SIDIType {
        string Name; 
        string PhoneNumber; 
        string DescriptionEvent; 
        string Location;
        string ReportTime;
        string AttendedCall;
        string DisplacementFiremenTime;
        string Observations;
        string FiremenSign;
        string Date;
    }
}
