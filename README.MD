# BackendIncomeTaxInCobol

This nodejs Express APP provides an API that uses COBOL to calculate the income tax depending on parameters Age, Marital Status and Age.
It is a sample app to test the node cobol bride and is a first project for cobol beginners like myself.

It implements the same logic for german income tax as this [offical income tax calculator](https://www.bmf-steuerrechner.de/ekst/eingabeformekst.xhtml).
Detailed logic explained [here](https://www.bundesfinanzministerium.de/Content/DE/Downloads/Steuern/Steuerarten/Lohnsteuer/Programmablaufplan/2023-06-09-geaenderte-PAP-2023-anwendung-ab-dem-1-juli-2023-anlage-1.pdf?__blob=publicationFile&v=5).

It will be used as a backend server for my official CV found in this [Repo](https://github.com/Oschm/Vue-CV) or hosted [here](https://oschm.github.io/Vue-CV/).

## Dependecies

The compilation of the COBOL code is done using this precompiled binary of gnucobol for windows provided by [Arnold Trembley](https://www.arnoldtrembley.com/GnuCOBOL.htm).

## Setup

Install gnucobol from archive and set the installation directory as "GNUCOBOL_DIRECTORY" in .env file.
