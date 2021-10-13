import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ImageFileInput from './components/image_file_input';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';
import firebaseApp from './service/firebase';
import ImageUploader from './service/image_uploader';


const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);

const FileInput = props => (
  <ImageFileInput {...props} imageUploader = {imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);
