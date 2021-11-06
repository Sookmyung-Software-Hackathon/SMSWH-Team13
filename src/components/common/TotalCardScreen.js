import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

export default function TotalCardScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                화공생명공학부
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF CHEMICAL{'\n'}AND BIOLOGICAL ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/m6FKk7V/college-mascot-0301.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 5}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>최첨단 융합 기술의 중심, {'\n'}화공생명공학 분야의 미래 지향적 여성 리더{'\n'}</Text>
          <Text>화공생명공학은 자연과학과 공학적 지식에 기반한 대표적 융합 학문입니다. 화학·전자소재·에너지공정의 설계/분석/제어와 함께 분자 수준의 미세공학적 접근이 요구되는 차세대 첨단소재, 신재생에너지, 이차전지, 질병진단 및 인공생명체, 복합용도 화장품 등의 분야를 아우릅니다. 특히 미래지향적 분야에 초점을 맞추어 실용적이고도 산업친화적인 연구와 전인적·여성친화적인 공학교육을 수행합니다.</Text>
        </View>   
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
              IT공학전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF{'\n'}IT ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/bmcgjcv/college-mascot-0302.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 20}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>사람을 향하는 정보기술,
{'\n'}여성 IT 소프트웨어 리더 양성{'\n'}</Text>
          <Text>생활 속에 IT 기기가 공존하는 스마트 시대에 발맞추어 더욱 발전된 IT 신기술과 여성 친화적인 소프트웨어를 중심으로 교육합니다. 숙명은 미래의 신성장 산업과 IT 융합 분야 등에서 요구하는 소프트웨어 인력을 양성하기 위해 3가지 트랙으로 특성화했습니다. 모바일과 웨어러블 장치 등 각종 스마트 기기의 솔루션 트랙, 데이터의 수집 관리부터 분석 활용을 위한 기법을 다루는 데이터 공학 트랙, 인체의 특징과 감성을 소프트웨어 및 지능형 IT 기기에 최대한 반영시키는 감성 컴퓨팅 트랙으로 나누어 집중 교육합니다.</Text>
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
              전자공학전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF {'\n'}ELECTRONICS ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/PhRx97D/college-mascot-0303.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 15}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>첨단 전자 기술의 {'\n'}혁신을 주도하는 여성 리더
{'\n'}</Text>
          <Text>ICT융합공학부 전자공학전공은 현대 물리학을 토대로 발전하였으며, 현재 전자회로 및 컴퓨터 분야를 중심으로 사회 곳곳에 영향을 미치지 않는 곳이 없을 정도로 그 영향력이 큰 전공입니다. 전통적 전자공학의 기초 및 다양한 첨단 전공 교과들을 포함한 여성친화적 교육과정을 통해 미래 성장동력 산업의 수요를 맞출 수 있도록 리더십을 갖춘 세계 수준의 글로벌 전자공학분야 핵심 인재 양성을 목표로 합니다.
</Text>
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
              응용물리전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF {'\n'}APPLIED PHYSICS</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/mR0bJHD/college-mascot-0304.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 10}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>가장 작은 것으로부터{'\n'}시작되는 과학기술의 발전{'\n'}</Text>
          <Text>응용물리학은 모든 자연과학 및 공학의 기반이 되는 물리학의 기본원리들을 토대로 새로운 물리 현상들을 탐구하고 이를 이용하여 인류 사회에 유익한 응용 지식과 기술을 개발하는 학문입니다. 응용물리 전공에서는 다양한 자연현상에 대한 근본적인 지식, 과학적 사고능력, 그리고 첨단산업에의 응용능력을 갖춘 여성 인재 양성을 목표로 합니다. 이를 위해, 학생들이 물리 지식의 기반을 닦고, 반도체 및 전자재료, 나노·신소재 등의 다양한 물성을 이해하여 산업적 응용 능력을 배양할 수 있는 체계적인 교과과정을 제공합니다.</Text>
        </View>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
              컴퓨터과학전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF {'\n'}COMPUTER SCIENCE</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/wzVJwcv/college-mascot-0305.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 10}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>정보사회의 나침판, {'\n'}흐름을 선도하는 소프트웨어 전문 인재{'\n'}</Text>
          <Text>소프트웨어학부는 사회에서 요구하는 전문성과 실용성을 겸비하여 지식정보화 시대를 주도할 IT 전문 인력의 양성뿐만 아니라 전공자 개인의 성취를 도모하여 최종적으로는 기업 및 국가의 발전에 기여하는 것을 지향하고 있습니다. 컴퓨터과학전공은 전통적인 컴퓨터과학 분야인 컴퓨터 시스템 및 소프트웨어에 대한 체계적인 교육 과정을 운영하며, 이를 기반으로 전문적인 소프트웨어 개발 능력을 갖춘 인재 양성을 목표로 합니다.</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                SW융합전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF{'\n'}SOFTWARE CONVERGENCE</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/yVbNyhc/college-mascot-0306.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 15}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>창조적 소프트웨어 융합을 통한 {'\n'}글로벌 여성공학 CEO 인재 양성{'\n'}</Text>
          <Text>소프트웨어학부는 사회에서 요구하는 전문성과 실용성을 겸비하여 지식정보화 시대를 주도할 IT 전문 인력의 양성뿐만 아니라 전공자 개인의 성취를 도모하여 최종적으로는 기업 및 국가의 발전에 기여하는 것을 지향하고 있습니다. 소프트웨어융합전공은 소프트웨어뿐만 아니라 다양한 학문과 융합 능력을 함양하기 위한 특화된 교육 과정을 운영하며, 이를 기반으로 창의적이고 복합적인 소프트웨어 융합 능력을 갖춘 인재 양성을 목표로 삼고 있습니다.</Text>
          </View>
      </SafeAreaView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                기계시스템학부
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF MECHANICAL {'\n'}SYSTEMS ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/MkpFb7D/college-mascot-0307.jpg" }} resizeMode="contain" style={styles.pictureStyle}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>감성과 첨단 기술을 {'\n'}겸비한 미래의 성장 동력 {'\n'}</Text>
          <Text>기계공학은 고전역학을 기반으로 한 기계, 장치, 설비의 설계, 제작, 성능 등에 관하여 기초 또는 응용 분야를 연구하는 학문으로, 이와 관련된 산업은 중공업, 자동차, 철강, 전자, 건설 등 산업 전반에 폭넓게 걸쳐 있습니다. 숙명여자대학교 기계시스템학부에서는 이러한 기존 분야 외에도 미래의 성장 동력 산업인 스마트카, 헬스케어로봇, 에너지 시스템 등 소형화 및 기술 집약적 분야에 특별히 초점을 맞추어 실용적·산업친화적 연구와 전인적·여성친화적 공학교육을 수행합니다.</Text>
          </View>
      </SafeAreaView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                기초공학부
              </Text>
              <Text style={styles.subtitleStyle}>DIVISION OF {'\n'}BASIC ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/fxv53Mg/college-mascot-0308.jpg" }} resizeMode="contain" style={[styles.pictureStyle, {marginLeft: 30}]}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>기초적 공학 교육으로 다양한  {'\n'}분야의 진출이 가능한 여성 공학인재 양성 {'\n'}</Text>
          <Text>기초공학부는 신입생을 자율전공 형식으로 선발하고 주요 공학 기초과목들과 각 세부 전공의 특징을 소개하는 다수의 공학개론을 수강하도록 교육과정을 운영하여 학생의 희망 진로 및 관심 분야에 맞춘 전공 선택이 가능하도록 합니다.
            학생선택권 강화 및 여성친화적 공대를 지향하기 위해 학생의 역량과 진로설계에 따라 2학년 진입 시 공대 내 학부 및 전공으로 선택-배정되어 해당 전공교육과정을 이수함으로써 개인의 관심 및 적성에 기초하여 이론과 실무를 겸비한 공학인재 양성을 목적으로 합니다.</Text>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 15,
    padding: 15,
    borderColor: '#e9dada',
    borderRadius: 10,
    borderWidth: 20,
    backgroundColor: 'white',
    width: '90%',
  },
  horizontalViewStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 100
  },
  VerticalViewStyle: {
    flexDirection: 'column'
  },
  pictureStyle: {
    width: 90,
    height: 100,
    marginBottom: -10,
    justifyContent: 'flex-end',
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 25,
    color: '#db5248',

  },
  subtitleStyle: {
    fontSize: 12,
    color: '#db5248',
    marginTop: 5
  },
  mainTextStyle: {
    fontWeight: 'bold'
  }
});
