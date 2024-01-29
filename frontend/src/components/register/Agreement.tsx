import React from 'react';
import { AgreementCSS } from '../../style/components/register/AgreementCSS';

function Agreement() {
  return (
    <AgreementCSS>
      개인정보 수집 ‧ 이용 ‧ 제공 동의서 본인은 귀사에 개인정보를 제출함에 따라
      [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집,
      이용 및 제공하는데 동의합니다. <br />
      <br />
      □ 개인정보의 수집 및 이용에 관한 사항 <br />
      수집하는 개인정보 항목 (회원가입 양식 내용 일체) <br />
      성명, 주민등록번호, 전화번호, 주소, 이메일, 가족관계, 학력사항, 경력사항,
      자격사항 등과 그 外 이력서 기재 내용 일체 <br />
      <br />
      □ 개인정보의 이용 목적 <br />
      수집된 개인정보를 로그인 목적 외의 용도로는 사용하지 않습니다. <br />
      <br />
      □ 개인정보의 보관 및 이용 기간 <br />
      귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된
      경우 [개인정보 보호법] 제21조에 따라 처리합니다. <br />
      <br />
      고유식별정보 수집 동의서 <br />
      □ 수집항목 <br />
      이메일 <br />
      <br />
      □ 수집목적 <br />
      사용자 로그인
    </AgreementCSS>
  );
}

export default Agreement;
