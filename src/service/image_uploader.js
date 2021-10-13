class ImageUploader {
    async upload(file){
        const formData = new FormData();
        const url = "https://api.cloudinary.com/v1_1/dcayot0zf/upload";

        formData.append("file", file);
        formData.append("upload_preset", "lkcqhuqd");
        const res = await fetch(
            url, 
            {
                method: "POST",
                body: formData
            }
        );
        return await res.json();
    }
}

export default ImageUploader;