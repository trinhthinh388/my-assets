import { Input, Button } from 'antd';
import Styles from './Searchbar.module.scss';

export default function Searchbar() {
  return (
    <Input.Group className="mb-5" compact>
      <Input
        className={`${Styles.InputField}`}
        size="large"
        placeholder="Address"
      />
      {/* <Button
        style={{ background: '#7947C9' }}
        className={`${Styles.SearchButton}`}
        type="primary"
      >
        Go
      </Button> */}
    </Input.Group>
  );
}
