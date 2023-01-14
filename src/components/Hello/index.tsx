import { useTranslation } from 'react-i18next';
import logo from '~/logo.svg';

const Hello = () => {
  const { t, i18n } = useTranslation('profile');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '50px',
      }}
    >
      <img src={logo} alt='Logo' style={{ height: '150px' }} />
      <ul
        style={{
          padding: 0,
          listStyle: 'none',
          fontSize: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <button
          onClick={() => {
            i18n.changeLanguage('pl');
          }}
        >
          Change language to PL
        </button>
        <li>{t('accept', { ns: 'translation' })}</li>
        <li>{t('add', { ns: 'translation' })}</li>
        <li>{t('myProfile')}</li>
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <p>Don&apos;t forgot to install Eslint and Prettier in your VSCode</p>
      <div>
        <a
          style={{ color: '#F24C4C' }}
          target='_blank'
          href='https://github.com/igdev116/vite-react-ts-eslint-prettier'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Hello;
