import AWS from 'aws-sdk';

export default {
  IAM_USER_KEY: '',
  IAM_USER_SECRET: '',
  BUCKET_NAME: '',
  AWS_REGION: '',
  uploadToS3: function (file, filename, acl = 'public-read') {
    return new Promisse((resolve, reject) => {
      let IAM_USER_KEY = this.IAM_USER_KEY;
      let IAM_USER_SECRET = this.IAM_USER_SECRET;
      let BUCKET_NAME = this.BUCKET_NAME;

      let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
      });

      s3bucket.createBucket(function () {
        var params = {
          Bucket: BUCKET_NAME,
          Key: filename,
          Body: file.data,
          ACL: acl,
        };

        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log(err);
            return resolve.reject({ error: true, message: err });
          }
          console.log(data);
          return resolve({ error: false, message: data });
        })
      })
    })
  }
}