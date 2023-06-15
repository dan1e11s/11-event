import styles from './index.module.scss';

const TableFooter = () => {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Help</th>
            <th>Follow us</th>
            <th>Company</th>
            <th>Policies</th>
          </tr>
          <tr>
            <td>My Event account</td>
            <td>Newsletter</td>
            <td>About us</td>
            <td>Privacy policy</td>
          </tr>
          <tr>
            <td>Items and sizes</td>
            <td>Tik Tok</td>
            <td>Join life</td>
            <td>Purchase conditions</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Instagram</td>
            <td>Offices</td>
            <td>Cookies settings</td>
          </tr>
          <tr>
            <td>Payment and invoices</td>
            <td>Facebook</td>
            <td>Work with us</td>
          </tr>
          <tr>
            <td>My purchases</td>
            <td>Twitter</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Exchanges, returns and refunds</td>
            <td>Pinterest</td>
            <td>Legal notes</td>
          </tr>
          <tr>
            <td>Event experiencies</td>
            <td>Youtube</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.languages}>
        <p>International</p>
        <ul className={styles.langList}>
          <li>English</li>
          <li>Francais</li>
          <li>Espanol</li>
          <li>Portugues</li>
          <li>© ALL RIGHTS RESERVED</li>
        </ul>
      </div>
    </div>
  );
};

export default TableFooter;
