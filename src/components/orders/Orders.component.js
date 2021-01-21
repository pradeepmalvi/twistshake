import React from "react";
import "./orders.styles.scss";

import Button from "../button/Button.component";

import { Link } from "react-router-dom";

export default function OrdersPage() {
  return (
    <div className="orders" id="dashboard">
      <div className="section-title">Recent Orders</div>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Details</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/id">#393</Link>
              </td>
              <td>03 november 2019</td>
              <td>on hold</td>
              <td>40 AEd</td>
              <td>
                <Button>
                  <span>View</span>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
