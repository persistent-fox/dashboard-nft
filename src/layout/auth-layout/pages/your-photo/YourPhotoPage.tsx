import React from 'react';
import { MainTitle } from '../../components/MainTitle';
import srcImg from './../../../../assets/images/your-photo.png';
import { S } from './YourPhotoPage_Styles';
import { Button } from '../../../../components/button/Button';

export const YourPhotoPage = () => {
	return (
		<S.YourPhotoPage>
			<MainTitle>Your Photo</MainTitle>
			<img src={srcImg} alt='' />
			<Button>Upload</Button>
		</S.YourPhotoPage>
	);
};
