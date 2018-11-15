#!/bin/bash
find . -type f -name "*.json" -print0 | xargs -0 -I{} sed -i '/^{/s/{/export default {/' {} 
jsonFiles=$(find . -type f -name "*.json");
for file in $jsonFiles; do
	mv $file "${file%json}js"
done
