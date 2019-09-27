      *++INCLUDE TPIAGCCB
      ****************************************************************
      *  TRADING PARTNER 2.4  COPYRIGHT 1994 BY TSI.                 *
      *
      *  TP-AGAPI-INITIALIZE-REQUEST:
      *     INITIALIZE FIRST TIME
      *     PERFORM MAPPING AS PROCESSING
      *     FINISH MAPPING WHEN DONE
      *
      *  TP-AGAPI-VERSION:
      *     0200 - MULTI-STANDARD API (FOR MOST USERS)
      *     0100 - OLD SINGLE STANDARD API
      *
      *  TP-AGAPI-RESPONSE:
      *
      *  TP-AGAPI-RESPONSE-CODE:
      *     RETURNED BY THE OUTBOUND API - SEE 88'S BELOW
      *
      *  TP-AGAPI-RESPONSE-MESSAGE:
      *     MESSAGE RETURNED FROM API - SUITABLE FOR PRINTING
      *
      *  TP-AGAPI-APPLICATION-ID:
      *     PASS THIS TO API - NAME OF ARD
      *
      *  TP-AGAPI-PARTNER:  (MUTUALLY EXCLUSIVE WITH ALIAS)
      *
      *  TP-AGAPI-CORP-PARTNER:
      *     FOUR CHARACTER QUALIFIER AND ID AS DEFINED TO TRADING
      *     PARTNER UNDER ONLINE "PARTNERS" MAIN MENU OPTION
      *
      *  TP-AGAPI-DIV-PARTNER:
      *     FOUR CHARACTER QUALIFIER AND ID AS DEFINED TO TRADING
      *     PARTNER UNDER "PARTNERS" OPTION "DIVISIONS"
      *
      *  TP-AGAPI-ALIAS:    (MUTUALLY EXCLUSIVE WITH PARTNER)
      *     FOUR CHARACTER QUALIFIER AND ID AS DEFINED TO TRADING
      *     PARTNER UNDER "PARTNERS" OPTION "ALIASES"
      *
      *  TP-AGAPI-DOCUMENT-ID:
      *     DOCUMENT IDENTIFIER WILL BE PLACED IN SEGMENT/ELEMENT
      *     AS DEFINED IN TRADING PARTNER "STANDARDS" OPTION
      *
      *  TP-AGAPI-TRACE-FLAG:
      *     SET TO 1 FOR A TRACE OF THIS CONTROL BLOCK'S VALUES
      *     UPON API CALLS.  VALUE OF 2 SHOULD ONLY BE USED WITH
      *     TSI SUPPORT STAFF.
      *
      *  TP-AGAPI-VERSION-RELEASE:
      *     PASS THE NAME OF THE STANDARD YOU WISH TO OUTPUT. THIS
      *     NAME MUST CORRESPOND WITH A DEFINITION FOUND UNDER
      *     TRADING PARTNER "STANDARDS" OPTION
      ****************************************************************
       01              TP-API-CB.
         03            TP-AGAPI-CB.
                                             
           05          TP-AGAPI-REQUEST               PIC X(40).
               88      TP-AGAPI-INITIALIZE-REQUEST
                         VALUE 'INITIALIZE-MAPPING'.
               88      TP-AGAPI-PERFORM-MAPPING
                         VALUE 'PERFORM-MAPPING'.
               88      TP-AGAPI-FINISH-MAPPING
                         VALUE 'FINISH-MAPPING'.

           05          TP-AGAPI-VERSION               PIC X(04).
               88      TP-AGAPI-VERSION-VALID         VALUES ARE '0100'
                                                                 '0200'.
               88      TP-AGAPI-VERSION-0100          VALUE      '0100'.
               88      TP-AGAPI-VERSION-0200          VALUE      '0200'.

           05          TP-AGAPI-RESPONSE.
               10      TP-AGAPI-RESPONSE-CODE         PIC 9(04) COMP.
                   88  TP-AGAPI-ALL-OKAY              VALUE 0.
                   88  TP-AGAPI-REQUEST-ERROR         VALUE 1.
                   88  TP-AGAPI-INITIALIZE-ERROR      VALUE 2.
                   88  TP-AGAPI-MAP-ERROR             VALUE 3.
                   88  TP-AGAPI-FINISH-ERROR          VALUE 4.
                   88  TP-AGAPI-UNKNOWN-LOOP-ID       VALUE 5.
                   88  TP-AGAPI-NO-ALGORITHM          VALUE 6.
                   88  TP-AGAPI-NO-PARTNER            VALUES    7 15.
                   88  TP-AGAPI-NO-APPLICATION        VALUE 8.
                   88  TP-AGAPI-ALGORITHM-IO-ERROR    VALUE 9.
                   88  TP-AGAPI-FATAL-GATEWAY-ERROR VALUE 10.
                   88  TP-AGAPI-GATEWAY-WRITE-ERROR   VALUE 11.
                   88  TP-AGAPI-PARTNER-IO-ERROR      VALUE 12.
                   88  TP-AGAPI-BAD-VERSION           VALUE 13.
                   88  TP-AGAPI-BAD-NUMERIC-TYPE      VALUE 14.
                   88  TP-AGAPI-NO-ALIAS              VALUE 15.
                   88  TP-AGAPI-ACCESS-ERROR          VALUE 16.
               10      TP-AGAPI-RESPONSE-MESSAGE      PIC X(80).
           05          TP-AGAPI-APPLICATION-ID        PIC X(10).
           05          TP-AGAPI-PARTNER.
               10      TP-AGAPI-CORP-PARTNER.
                   15  TP-AGAPI-CORP-ID-QUAL          PIC X(04).
                   15  TP-AGAPI-CORP-ID               PIC X(35).
               10      TP-AGAPI-DIV-PARTNER.
                   15  TP-AGAPI-DIV-ID-QUAL           PIC X(04).
                   15  TP-AGAPI-DIV-ID                PIC X(35).
           05          TP-AGAPI-ALIAS REDEFINES
                       TP-AGAPI-PARTNER.
               10      TP-AGAPI-ALIAS-PARTNER.
                   15  TP-AGAPI-ALIAS-ID-QUAL         PIC X(04).
                   15  TP-AGAPI-ALIAS-ID              PIC X(35).
               10      FILLER                         PIC X(39).
           05          TP-AGAPI-DOCUMENT-ID           PIC X(45).
           05          TP-AGAPI-TRACE-FLAG            PIC 9(4) COMP.
               88      TP-AGAPI-TRACE-CB              VALUES   1  2.
               88      TP-AGAPI-TRACE-INTERNAL        VALUE 2.
           05          TP-AGAPI-VERSION-RELEASE       PIC X(12).
           05          FILLER                         PIC X(88).
