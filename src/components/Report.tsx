"use client";

import "@/Assets/Style/style.scss";
import "@/Assets/Style/common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import _fetch from '@/config/api';
import { useUser } from '@/app/context/UserContext';

export default function Report(pageTitle: any) {
  return (  
    <section className="main">
      <div className="main-page">
        <div className="container">

            <div className="row">
              <div className="col-lg-12">
                 <div className="card table-card">
                  <div className="card-body">
                    <div className="table-responsive">
                       <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                          <tbody>
                            <tr>
                              <td >1</td>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <td >2</td>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                       </table>
                    </div>
                  </div>
                 </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
