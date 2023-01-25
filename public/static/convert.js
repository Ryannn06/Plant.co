function blobToBase64(blob) {
	var buffer = Buffer.from(blob).toString('latin1');
	return buffer
}