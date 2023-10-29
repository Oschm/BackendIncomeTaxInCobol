       IDENTIFICATION DIVISION.
       PROGRAM-ID. CLIOPTIONS.
       ENVIRONMENT DIVISION.
       DATA DIVISION.

       WORKING-STORAGE SECTION.
              01 Income-Arg       PIC 9(9)V99 VALUE ZERO.
              01 Is-Married-Arg   PIC X VALUE 'N'.
              01 Year-Arg         PIC 9(4) VALUE 2023.

              01 Y                PIC 9(9)V99999 VALUE ZERO.
              01 Tax-Rate         PIC 9(9)V99 VALUE ZERO.

              01 First-Bracket    PIC 9(9)V99 VALUE 10908.00.
              01 Second-Bracket   PIC 9(9)V99 VALUE 15999.00.
              01 Third-Bracket    PIC 9(9)V99 VALUE 62809.00.
              01 Fourth-Bracket   PIC 9(9)V99 VALUE 277825.00.
              01 Fifth-Bracket    PIC 9(9)V99 VALUE ZERO.
              01 Sixth-Bracket    PIC 9(9)V99 VALUE ZERO.

              01 Base-Rate        PIC 9(9)V99 VALUE 979.18.
              01 Offset           PIC 9(9)V99 VALUE 1400.00.
              01 Offset-Two       PIC 9(9)V99 VALUE 966.53. 

              01 Result           PIC 9(9) VALUE Zero.
       PROCEDURE DIVISION.
       ACCEPT Income-Arg FROM argument-value,
       ACCEPT Is-Married-Arg FROM argument-value,
       ACCEPT Year-Arg FROM argument-value.

       IF Year-Arg = 2023 THEN
            MOVE 2023 TO RESULT
       ELSE IF Year-Arg = 2022 THEN
              *>TODO: Implement dynamic tax brackets for individual years. 
              *>Problem is years might have different number of brackets and values
              *>Dynamic solution would be preferred.
            MOVE 2022 TO RESULT
       END-IF.


       IF Income-Arg <= First-Bracket THEN
              MOVE 0 TO Result
       ELSE IF Income-Arg > First-Bracket 
               AND Income-Arg <= Second-Bracket THEN
               COMPUTE Y = (Income-Arg - First-Bracket) / 10000
               COMPUTE Tax-Rate = (Base-Rate * Y + Offset) * Y
               MOVE Tax-Rate TO Result
       ELSE IF Income-Arg > Second-Bracket 
           AND Income-Arg <= Third-Bracket THEN
              MOVE 192.59 TO Base-Rate
              MOVE 2397 TO Offset

              COMPUTE Y = (Income-Arg - Second-Bracket) / 10000
              COMPUTE Tax-Rate = (Base-Rate * Y + Offset) 
              * Y + Offset-Two
              MOVE Tax-Rate TO Result
       ELSE IF Income-Arg > Third-Bracket 
           AND Income-Arg <= Fourth-Bracket THEN
              MOVE 0.42 TO Base-Rate
              MOVE 9972.98 TO Offset
              COMPUTE Tax-Rate = Base-Rate * Income-Arg - Offset
              MOVE Tax-Rate TO Result
       ELSE IF Income-Arg > Fourth-Bracket THEN
              MOVE 0.45 TO Base-Rate
              MOVE 18307.73 TO Offset
              COMPUTE Tax-Rate = Base-Rate * Income-Arg - Offset
              MOVE Tax-Rate TO Result
       ELSE
           MOVE 222 TO Result  *> Handle other cases as needed
       END-IF.

       DISPLAY Result
       STOP RUN.
