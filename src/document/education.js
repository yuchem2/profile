import ProfileItem from '../component/profileItem'
import Content from '../component/content'

export default function Education() {
    return (
        <Content title="EDUCATION">
            <ProfileItem title="고려대학교 세종캠퍼스" duration="2019.03 - 2025.02" description="최종 학력">
                <p className="Profile-paragraph">
                    컴퓨터웨어소프트웨어학과 <br />
                    이수학점: 131 &nbsp; 평점평균: 4.4 / 4.5
                </p>
            </ProfileItem>
            <ProfileItem title="한세대학교" duration="2018.03 - 2019.01">
                <p className="Profile-paragraph">전자소프트웨어학과 중퇴</p>
            </ProfileItem>
            <ProfileItem title="마포고등학교" duration="2015.03 - 2018.02">
                <p className="Profile-paragraph">2018년도 졸업</p>
            </ProfileItem>
        </Content>
    )
}
