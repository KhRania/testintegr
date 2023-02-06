import React from "react";

import { Text, Button, Img, Line } from "components";

const PrsentationdeYooreedOnePage = () => {
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1542px] mx-[auto] overflow-auto relative w-[100%]">
        <div className="absolute bg-gradient  flex flex-col h-[max-content] inset-y-[0] items-start justify-end left-[0] my-[auto] p-[82px] md:px-[20px] sm:px-[20px] w-[92%]">
          <div className="flex flex-col items-start justify-start mb-[160px] mt-[789px] md:w-[100%] sm:w-[100%] w-[51%]">
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
              toucher toutes les institutions et les catégories sociales malgré
              quelques obstacles. Et c’est dans ce contexte que nous avons
              conçu, étudié et lancé le groupe Yooreed, dans l’objectif de nous
              placer leader Nord Africain et solution pour un E-Marché
              Maghrébin..
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
        </div>
        <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] inset-x-[0] items-center justify-between max-w-[1280px] mx-[auto] md:px-[20px] sm:px-[20px] top-[4%] w-[100%]">
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
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[17%] w-[100%]">
          <div className="bg-red_A200 h-[528px] w-[100%]"></div>
        </div>
        <div className="absolute bottom-[18%] flex flex-col items-start justify-start md:px-[20px] sm:px-[20px] right-[5%] w-[41%]">
          <Text
            className="font-orelegaone leading-[40.00px] not-italic text-black_900 text-left"
            as="h2"
            variant="h2"
          >
            Lorem ipsum dolor sit
            <br />
            amet, consectetur..
          </Text>
          <Text
            className="font-normal font-poppins leading-[24.00px] mt-[50px] not-italic text-black_900 text-left"
            as="h6"
            variant="h6"
          >
            Yooreed est crée pour résoudre la problématique annoncée de
            concevoir, créer et développer une plateforme qui permet aux clients
            de consulter, suivre et bénéficier des offres proposées par les
            entreprises aux amicaux contractées.
            <br />
            Les amicaux et les entreprises privées et publiques sont liées par
            des contrats de collaboration.
          </Text>
          <div className="flex flex-col font-poppins items-center justify-start mt-[36px] md:w-[100%] sm:w-[100%] w-[22%]">
            <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
              VOIR PLUS
            </Button>
          </div>
        </div>
        <footer className="absolute bg-red_A200 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] w-[100%]">
          <div className="flex flex-col items-center justify-center w-[89%]">
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
                    onClick={handleNavigate6}
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
        <div className="absolute font-orelegaone h-[529px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] top-[17%] w-[100%]">
          <Img
            src="images/img_pexelsphoto3162049.png"
            className="h-[529px] m-[auto] object-cover w-[100%]"
            alt="pexelsphoto3162049"
          />
          <div className="absolute bg-gradient1  md:h-[175px] sm:h-[175px] h-[529px] inset-[0] justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] w-[100%]">
            <Img
              src="images/img_group32.svg"
              className="absolute h-[52px] inset-[0] justify-center m-[auto] w-[auto]"
              alt="GroupThirtyTwo"
            />
            <Text
              className="absolute h-[max-content] inset-[0] justify-center m-[auto] not-italic text-left text-white_A700 w-[max-content]"
              as="h3"
              variant="h3"
            >
              <span className="sm:text-[35px] md:text-[41px] text-white_A700 text-[45px] font-orelegaone font-normal">
                Dans un monde en pleine transition numérique, nous vous
                présenterons votre solution :
              </span>
              <span className="sm:text-[35px] md:text-[41px] text-white_A700 text-[45px] font-orelegaone font-normal">
                {" "}
                  Yooreed : la nouvelle tendance !{" "}
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrsentationdeYooreedOnePage;
