import React from "react";

import { Img, Text, Button, Line } from "components";

const PrsentationdeYooreedPage = () => {
  function handleNavigate8() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex flex-col items-center justify-start py-[66px] w-[100%]">
          <div className="flex flex-col gap-[122px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[15px] w-[100%]">
            <div className="flex flex-col gap-[101px] md:gap-[40px] sm:gap-[40px] items-start justify-start max-w-[1282px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[2px] w-[100%]">
                <Img
                  src="images/img_yooreed1.png"
                  className="sm:flex-1 h-[102px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                  alt="yooreedOne"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="font-bold text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      YOOREED
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      OPERATEURS
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      PARTENAIRES
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      EVENEMENTS
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      CONTACT
                    </Text>
                  </div>
                </div>
                <Button className="cursor-pointer font-normal leading-[normal] min-w-[137px] md:mt-[0] sm:mt-[0] my-[25px] not-italic text-[18px] text-center text-white_A700 w-[auto]">
                  CONNEXION
                </Button>
              </div>
              <Text
                className="font-orelegaone not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Dans un monde en pleine transition numérique, nous vous
                présenterons votre solution :   Yooreed : la nouvelle tendance !{" "}
              </Text>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[129px] md:gap-[40px] sm:gap-[40px] justify-start mb-[47px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[51%]">
                <div className="md:h-[528px] sm:h-[528px] h-[606px] relative w-[100%]">
                  <div className="absolute bg-red_A200 h-[528px] inset-x-[0] mx-[auto] top-[0] w-[97%]"></div>
                  <div className="absolute bottom-[0] h-[526px] md:h-[auto] sm:h-[auto] right-[0] md:w-[100%] sm:w-[100%] w-[86%]">
                    <Img
                      src="images/img_pexelscottonbr.png"
                      className="h-[526px] m-[auto] object-cover w-[100%]"
                      alt="pexelscottonbr"
                    />
                    <Img
                      src="images/img_yooreed1.png"
                      className="absolute h-[94px] inset-y-[0] my-[auto] object-cover right-[36%] w-[24%]"
                      alt="yooreedOne One"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[83px] md:w-[100%] sm:w-[100%] w-[83%]">
                  <Text
                    className="font-orelegaone leading-[40.00px] not-italic text-black_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    Présentation commerciale
                    <br />
                    de Yooreed...
                  </Text>
                  <Text
                    className="font-normal font-poppins leading-[24.00px] mt-[50px] not-italic text-black_900 text-left sm:w-[100%] w-[96%]"
                    as="h6"
                    variant="h6"
                  >
                    Yooreed est une SARL, constituée conformément à la
                    législation tunisienne en vigueur, notament le Code de
                    Commerce et la loi N° 2000-83 DU 9 AOUT 2000, relative aux
                    échanges et au commerce électronique. Yooreed a pour objet
                    les activités commerciales et marketing en ligne entre les
                    sociétés, les adhérents des Groupements Sociaux, et les
                    consommateurs (B to B, B to C), au niveau National et
                    Maghrébin.
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[51px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_download.svg"
                        className="ml-[16px] text-center"
                        alt="download"
                      />
                    }
                    size="sm"
                  >
                    <div className="bg-transparent cursor-pointer font-poppins font-semibold leading-[normal] text-[17px] text-left text-white_A700">
                      Télécharger le document
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[183px] md:gap-[40px] sm:gap-[40px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[80px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[50%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[83%]">
                  <Text
                    className="font-orelegaone leading-[52.00px] not-italic text-black_900 text-left sm:w-[100%] w-[88%]"
                    as="h2"
                    variant="h2"
                  >
                    Présentation détaillée sur Yooreed..
                  </Text>
                  <Text
                    className="font-normal font-poppins leading-[24.00px] mt-[48px] not-italic text-black_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    En Tunisie, la digitalisation ne cesse de se développer pour
                    toucher toutes les institutions et les catégories sociales
                    malgré quelques obstacles. Et c’est dans ce contexte que
                    nous avons conçu, étudié et lancé le groupe Yooreed, dans
                    l’objectif de nous placer leader Nord Africain et solution
                    pour un E-Marché Maghrébin..
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[33px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_download.svg"
                        className="ml-[16px] text-center"
                        alt="download"
                      />
                    }
                    size="sm"
                  >
                    <div className="bg-transparent cursor-pointer font-poppins font-semibold leading-[normal] text-[17px] text-left text-white_A700">
                      Télécharger le document
                    </div>
                  </Button>
                </div>
                <div className="md:h-[528px] sm:h-[528px] h-[553px] relative w-[100%]">
                  <div className="absolute bg-orange_300_35 h-[528px] inset-x-[0] mx-[auto] top-[0] w-[97%]"></div>
                  <Img
                    src="images/img_pexelslizasummer6347724.png"
                    className="absolute bottom-[0] h-[481px] left-[0] object-cover w-[86%]"
                    alt="pexelslizasummer6347724"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-red_A200 flex items-center justify-center mt-[2px] w-[100%]">
          <div className="flex flex-col items-center justify-center mb-[14px] ml-[85px] mr-[80px] mt-[30px] w-[89%]">
            <div className="flex flex-col gap-[44px] items-center justify-center w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between w-[100%]">
                <Img
                  src="images/img_group26.svg"
                  className="h-[88px] mb-[2px] w-[auto]"
                  alt="GroupTwentySix"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start mb-[42px] md:mt-[0] sm:mt-[0] mt-[21px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row sm:gap-[52px] items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      YOOREED
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      OPERATEURS
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      PARTENAIRES
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      EVENEMENTS
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      CONTACT
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal md:mt-[0] sm:mt-[0] mt-[21px] not-italic text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Rue de la cite, Sousse 4020 Seofy@mail.com Tél.: 00 216 98 100
                  100
                </Text>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[15px] items-start justify-start p-[3px] w-[15px]"
                  style={{ backgroundImage: "url('images/img_group25.svg')" }}
                >
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[8px] w-[7px]"
                    alt="lightbulb"
                  />
                </div>
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  COPYRIGHT YOOREED 2023
                </Text>
                <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[8px] rotate-[180deg] w-[auto]" />
                <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-center md:w-[100%] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer h-[14px] w-[14px]"
                    onClick={handleNavigate8}
                    alt="facebook"
                  />
                  <Img
                    src="images/img_camera.svg"
                    className="h-[15px] ml-[10px] w-[15px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-[13px] ml-[13px] w-[13px]"
                    alt="linkedin"
                  />
                </div>
                <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[8px] rotate-[180deg] w-[auto]" />
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  INFORMATIONS LEGALES - AGENCE WE SLOTH-LAB
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrsentationdeYooreedPage;
