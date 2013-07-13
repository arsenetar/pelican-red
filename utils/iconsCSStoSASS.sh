#!/bin/bash
SASS_PATH="../static/sass/voltaicideas/pelican-red/"
INPUT_FILE="${SASS_PATH}pelican-red-codes.css"
OUTPUT_FILE="${SASS_PATH}_iconList.scss"

PREFIX="icon"

sed -rn "s/^.${PREFIX}-(.*):before.*'\\\e(.*)'; \}.*/@include i-class('\1','\2'); /p" ${INPUT_FILE} > ${OUTPUT_FILE}
echo -en '\n\n//Generated on ' >> ${OUTPUT_FILE}
date -u >> ${OUTPUT_FILE}
echo '' >> ${OUTPUT_FILE}
