import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Audio
        height="100"
        width="100"
        color="#6a9bd8"
        ariaLabel="audio-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        visible={true}
      />
    </>
  );
};
