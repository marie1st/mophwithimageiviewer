import react from 'react';
import styles from './Cardbox.module.css';

export function Cardbox(props) {

    return (
        <div>
            <table>
                <tr>
                    <th width ="240px">
                        <div>ชื่อ</div>
                        <div>GIVEN NAME</div>
                    </th>
                    <th width ="240px">
                        <div>{props.given_name}</div>
                    </th>
                    <th width="240px">
                        <div>ชื่อกลาง</div>
                        <div>MIDDLE NAME</div>
                    </th>
                    <th width="240px">
                        <div>{props.middlename}</div>
                    </th>
                    <th width="240px">
                        <div>นามสกุล</div>
                        <div>LASTNAME</div>
                        <div>{props.lastname}</div>
                    </th>
                </tr>
                <tr>
                    <th>
                    User ID No. : {props.id}
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>หมายเลขหนังสือเดืนทาง</div>
                        <div>PASSPORT NO.</div>
                    </th>
                    <th width="240px">
                        <div>{props.pass}</div>
                    </th>
                    <th width="240px">
                        <div> สัญชาติ</div>
                        <div>NATIONALITY</div>
                    </th>
                    <th width="240px">
                        <div>{props.nationality}</div>
                    </th>
                    <th width="240px">
                        <div> วัน/เดือน/ปี เกิด</div>
                        <div>DATE OF BIRTH</div>
                        <div>{props.date_of_birth}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>ประเภทวีซ่า</div>
                        <div>TYPE OF VISA</div>
                    </th>
                    <th width="240px">
                        <div> {props.type_of_visa}</div>
                    </th>
                    <th width="240px">
                        <div> หมายเลขวีซ่าที่ได้รับอนุมัติ</div>
                        <div>PRE APPROVED VISA NO.</div>
                    </th>
                    <th>
                        <div> {props.pre_approved_visa_no}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>สายการบินขาเข้า</div>
                        <div>ARRIVAL FLIGHT</div>
                    </th>
                    <th width="240px">
                        <div>{props.arrival_flight}</div>
                    </th>
                    <th width="240px">
                        <div>วันที่เดินทางขาเข้า วัน/เดือน/ปี</div>
                        <div>DATE OF ARRIVAL</div>
                    </th>
                    <th>
                        <div>{props.date_of_arrival}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>สายการบินขาออก</div>
                        <div>DEPARTURE FLIGHT</div>
                    </th>
                    <th width="240px">
                        <div>{props.departure_flight}</div>
                    </th>
                    <th width="240px">
                        <div>กำหนดการขาออก วัน/เดือน/ปี</div>
                        <div>DATE OF DEPARTURE</div>
                    </th>
                    <th width="480px">
                        <div>{props.date_of_departure}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>โรงแรมที่จอง 1</div>
                        <div>ACCOMODATION 1</div>
                    </th>
                    <th width="480px">
                        <div>{props.accom1}</div>
                    </th>
                    <th width="240px">
                        <div>  วัน/เดือน/ปี</div>
                        <div>DD/MM/YYYY</div>
                        <div>{props.accom1_date}</div>
                    </th>
                </tr>
                <tr>
                    <th width = "240px">
                        <div>โรงแรมที่จอง 2</div>
                        <div>ACCOMODATION 2</div>
                    </th>
                    <th width="480px">
                        <div>{props.accom2}</div>
                    </th>
                    <th width="240px">
                        <div>  วัน/เดือน/ปี</div>
                        <div>DD/MM/YYYY</div>
                        <div>{props.accom2_date}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>โรงแรมที่จอง 3</div>
                        <div>ACCOMODATION 3</div>
                    </th>
                    <th width="480px">
                        <div>{props.accom3}</div>
                    </th>
                    <th width="240px">
                        <div>  วัน/เดือน/ปี</div>
                        <div>DD/MM/YYYY</div>
                        <div>{props.accom3_date}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div> มีประกันเดินทางโรคโควิด19</div>
                        <div>THE INDIVIDUAL IS CLEAR FOR HEALTH VISA</div>
                    </th>
                    <th width ="240px">
                        <div>{props.insurance_covid}</div>
                    </th>
                    <th width="240px">
                        <div>บริษัทผู้รับประกันเดืนทางโรคโควิด19</div>
                        <div>Insurer Company</div>
                    </th>
                    <th width="240px">
                        <div>{props.insurance_company}</div>
                    </th>
                    <th width="240px">
                        <div>หมายเลขกรรมธรรม์</div>
                        <div> Policy No.</div>
                        <div>{props.policy_no}</div>
                    </th>
                </tr>
                <tr>
                    <th width="240px">
                        <div>ได้รับการอนุมัติจากกระทรวงสาธารณสุชแล้ว</div>
                        <div>THE INDIVIDUAL IS CLEAR FOR HEALTH E VISA</div>    
                    </th>
                    <th>
                        <div>{props.health_evisa}</div>
                    </th>
                    <th width="240px">
                        <div>วัน/เดือน/ปี</div>
                        <div>DD/MM/YYYY</div>
                        <div>{props.health_evisa_date}</div>
                    </th>
                </tr>


            </table>
        </div>
    )
}

export default Cardbox;