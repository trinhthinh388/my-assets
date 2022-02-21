import { Input, Button } from 'antd';
import Styles from '../../styles/Searchbar.module.css';

export default function Searchbar() {
  return (
    <Input.Group compact>
      <Input
        className={`${Styles.InputField}`}
        size="large"
        placeholder="Address"
      />
      <Button className={`${Styles.SearchButton}`} type="primary">
        Go
      </Button>
    </Input.Group>
  );
}
