FROM mcr.microsoft.com/windows/servercore/iis

RUN powershell -NoProfile -Command Remove-Item -Recurse C:\inetpub\wwwroot\*

WORKDIR /inetpub/wwwroot

RUN powershell -NoProfile -Command mkdir assets
COPY /dist/* c:/inetpub/wwwroot/
COPY /dist/assets/* c:/inetpub/wwwroot/assets/
COPY /dist/img/* c:/inetpub/wwwroot/img/
COPY /dist/js/* c:/inetpub/wwwroot/js/