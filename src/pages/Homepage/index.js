import React from "react";

import { Img, Text, Button, Line } from "components";

const HomepagePage = () => {
  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="sm:h-[1065px] md:h-[833px] h-[978px] relative w-[100%]">
          <div className="absolute sm:h-[1065px] h-[702px] md:h-[833px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <div className="absolute bg-gradient  flex flex-col md:gap-[40px] sm:gap-[40px] gap-[82px] h-[max-content] inset-[0] items-end justify-center m-[auto] p-[39px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between mr-[40px] mt-[26px] md:w-[100%] sm:w-[100%] w-[94%]">
                <Img
                  src="images/img_yooreed1.png"
                  className="h-[102px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                  alt="yooreedOne"
                />
                <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
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
              <Img
                src="images/img_group5.svg"
                className="h-[412px] mr-[38px] w-[auto]"
                alt="GroupFive"
              />
            </div>
            <Img
              src="images/img_girltablettra.png"
              className="absolute bottom-[0] h-[422px] object-cover right-[12%] w-[35%]"
              alt="GirlTabletTra"
            />
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[6%] top-[28%] w-[50%]">
            <Text
              className="font-orelegaone not-italic text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Démarrons ensemble !  Yooreed : la nouvelle tendance..
            </Text>
            <Text
              className="font-normal font-poppins leading-[25.00px] mt-[36px] not-italic text-black_900 text-left sm:w-[100%] w-[76%]"
              as="h6"
              variant="h6"
            >
              Concevoir, créer et développer une plateforme qui permet aux
              clients de consulter, suivre et bénéficier des offres proposées
              par les entreprises aux amicaux contractées.
            </Text>
            <div className="flex flex-col font-poppins items-center justify-start mt-[44px] md:w-[100%] sm:w-[100%] w-[28%]">
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[197px] text-[17px] text-center text-white_A700 w-[auto]">
                CONTACTEZ-NOUS
              </Button>
            </div>
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start sm:pr-[20px] pr-[22px] py-[22px] right-[0] w-[40%]">
            <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:mt-[0] my-[26px] sm:w-[100%] w-[1px]" />
            <Img
              src="images/img_logoelyosrinternationale.png"
              className="h-[65px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[34%]"
              alt="logoelyosrinternationale"
            />
            <Line className="bg-black_900 h-[180px] sm:h-[1px] sm:ml-[0] ml-[63px] sm:mt-[0] my-[26px] sm:w-[100%] w-[1px]" />
            <Img
              src="images/img_logotps1.png"
              className="h-[126px] md:h-[auto] sm:h-[auto] sm:ml-[0] ml-[40px] object-cover sm:w-[100%] w-[29%]"
              alt="LogoTPSOne"
            />
            <Img
              src="images/img_arrowright.svg"
              className="h-[38px] sm:ml-[0] ml-[28px] w-[38px]"
              alt="arrowright"
            />
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex flex-row gap-[26px] inset-x-[0] items-center justify-center mx-[auto] sm:pr-[20px] pr-[27px] py-[27px] w-[20%]">
            <Line className="bg-black_900 h-[180px] my-[21px] w-[1px]" />
            <Img
              src="images/img_download1.png"
              className="h-[72px] md:h-[auto] sm:h-[auto] object-cover w-[90%]"
              alt="downloadOne"
            />
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex flex-row gap-[48px] items-center justify-center left-[20%] sm:pr-[20px] md:pr-[40px] pr-[43px] py-[43px] w-[20%]">
            <Line className="bg-black_900 h-[180px] my-[5px] w-[1px]" />
            <Img
              src="images/img_qqq1.png"
              className="h-[185px] md:h-[auto] sm:h-[auto] mr-[11px] mt-[5px] object-cover w-[185px]"
              alt="qqqOne"
            />
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex flex-row items-center justify-end left-[0] p-[11px] w-[20%]">
            <Img
              src="images/img_frame.svg"
              className="h-[38px] w-[38px]"
              alt="Frame"
            />
            <Img
              src="images/img_logokleur.png"
              className="h-[146px] md:h-[auto] sm:h-[auto] mb-[46px] mt-[62px] object-cover w-[83%]"
              alt="logokleur"
            />
          </div>
        </div>
        <div className="flex md:h-[1021px] sm:h-[1021px] h-[1275px] justify-end relative w-[100%]">
          <div className="absolute bg-gradient  flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] pt-[73px] sm:px-[20px] md:px-[40px] px-[73px] top-[0] w-[100%]">
            <div className="md:h-[508px] sm:h-[508px] h-[527px] md:ml-[0] sm:ml-[0] ml-[7px] md:mt-[0] sm:mt-[0] mt-[30px] relative md:w-[100%] sm:w-[100%] w-[auto]">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[11px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group62.svg')" }}
              >
                <Img
                  src="images/img_frame_white_a700.svg"
                  className="h-[195px] mb-[240px] mr-[9px] w-[auto]"
                  alt="Frame One"
                />
              </div>
              <Img
                src="images/img_1328converti.png"
                className="absolute h-[508px] inset-y-[0] my-[auto] object-cover right-[26%] w-[39%]"
                alt="1328Converti"
              />
            </div>
            <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[68px] md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="font-orelegaone not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Qui sommes-nous ? Que fait-on ?
              </Text>
              <Text
                className="font-normal font-poppins leading-[24.00px] mt-[25px] not-italic text-black_900 text-left"
                as="h6"
                variant="h6"
              >
                Yooreed est crée pour résoudre la problématique annoncée de
                concevoir, créer et développer une plateforme qui permet aux
                clients de consulter, suivre et bénéficier des offres proposées
                par les entreprises aux amicaux contractées.
                <br />
                Les amicaux et les entreprises privées et publiques sont liées
                par des contrats de collaboration.
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start mt-[36px] md:w-[100%] sm:w-[100%] w-[22%]">
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
                  VOIR PLUS
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gradient  h-[645px] mt-[auto] mx-[auto] rotate-[90deg] w-[100%]"></div>
          <div className="absolute bottom-[0] h-[647px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] w-[100%]">
            <Img
              src="images/img_5313769011.png"
              className="h-[647px] m-[auto] object-cover w-[100%]"
              alt="5313769011"
            />
            <div className="absolute h-[647px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] w-[100%]">
              <Img
                src="images/img_5313769012.png"
                className="h-[647px] m-[auto] object-cover w-[100%]"
                alt="5313769012"
              />
              <div className="absolute bottom-[21%] flex flex-col items-start justify-start right-[25%] w-[44%]">
                <Text
                  className="font-orelegaone not-italic text-black_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Besoin de divertissement ? Un évènement se présente..
                </Text>
                <Text
                  className="font-normal font-poppins leading-[25.00px] mt-[39px] not-italic text-black_900 text-left sm:w-[100%] w-[87%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation..
                </Text>
                <Button className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[123px] mt-[46px] text-[17px] text-center text-white_A700 w-[auto]">
                  VOIR PLUS
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="font-orelegaone h-[1452px] md:h-[961px] sm:h-[961px] relative w-[100%]">
          <div className="absolute h-[1259px] md:h-[961px] sm:h-[961px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <Img
              src="images/img_dashboard.svg"
              className="absolute h-[8px] left-[19%] top-[42%] w-[auto]"
              alt="dashboard"
            />
            <div className="absolute bg-gray_200 h-[413px] left-[6%] top-[27%] w-[44%]"></div>
            <div className="absolute bottom-[6%] flex md:flex-col sm:flex-col flex-row gap-[17px] inset-x-[0] items-center justify-start mx-[auto] w-[89%]">
              <div className="bg-gray_200 h-[413px] rotate-[-180deg] w-[50%]"></div>
              <div className="bg-gray_200 h-[413px] w-[50%]"></div>
            </div>
            <Text
              className="absolute leading-[50.00px] left-[6%] not-italic text-black_900 text-left top-[7%]"
              as="h2"
              variant="h2"
            >
              Les services importants de
              <br />
              Yooreed..
            </Text>
            <div className="absolute bg-gradient2  h-[412px] right-[6%] rotate-[-180deg] top-[27%] w-[44%]"></div>
            <div className="absolute bg-bluegray_100_19 flex flex-col font-poppins h-[max-content] inset-[0] justify-center m-[auto] p-[83px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Text
                className="font-normal leading-[24.00px] mr-[668px] mt-[159px] not-italic text-black_900 text-left sm:w-[100%] w-[48%]"
                as="h6"
                variant="h6"
              >
                Yooreed posséde plusieurs services, qui contribuent dans la
                bonne gestion et la communication avec les partenaires ou
                opérateurs..
              </Text>
              <div className="flex md:h-[181px] sm:h-[181px] h-[92px] md:ml-[0] sm:ml-[0] ml-[905px] mr-[255px] mt-[106px] relative md:w-[100%] sm:w-[100%] w-[9%]">
                <div className="md:h-[75px] sm:h-[75px] h-[92px] ml-[undefinedpx] my-[auto] w-[89%] z-[1]">
                  <div className="absolute flex h-[75px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                    <div className="h-[75px] md:h-[auto] sm:h-[auto] ml-[undefinedpx] my-[auto] w-[95%] z-[1]">
                      <div className="absolute md:h-[35px] sm:h-[35px] h-[37px] inset-y-[0] left-[0] my-[auto] w-[43%]">
                        <div className="absolute h-[31px] md:h-[auto] sm:h-[auto] inset-y-[0] left-[0] my-[auto] w-[28%]">
                          <Line className="bg-white_A700 h-[27px] ml-[2px] w-[6px]" />
                          <Img
                            src="images/img_info.svg"
                            className="absolute h-[31px] inset-[0] justify-center m-[auto] w-[auto]"
                            alt="info"
                          />
                        </div>
                        <div className="absolute bg-white_A700 h-[33px] inset-y-[0] my-[auto] right-[0] w-[78%]"></div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] items-end justify-start my-[auto] p-[8px] right-[0] w-[85%]"
                          style={{
                            backgroundImage: "url('images/img_info.svg')",
                          }}
                        >
                          <div className="bg-red_400 h-[19px] w-[89%]"></div>
                        </div>
                      </div>
                      <Img
                        src="images/img_volume.svg"
                        className="absolute h-[73px] inset-y-[0] my-[auto] right-[3%] w-[auto]"
                        alt="volume"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] p-[8px] right-[0] w-[60%]"
                        style={{
                          backgroundImage: "url('images/img_group63.svg')",
                        }}
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-end justify-start my-[4px] p-[10px] md:w-[100%] sm:w-[100%] w-[98%]"
                          style={{
                            backgroundImage: "url('images/img_group65.svg')",
                          }}
                        >
                          <div className="flex flex-col items-center justify-start my-[3px] md:w-[100%] sm:w-[100%] w-[15%]">
                            <div className="bg-bluegray_900 h-[4px] w-[3px]"></div>
                            <div className="bg-bluegray_900 h-[4px] mt-[6px] w-[3px]"></div>
                            <div className="bg-bluegray_900 h-[4px] mt-[7px] w-[3px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 h-[73px] ml-[-3px] mr-[2px] my-[auto] w-[7%] z-[1]"></div>
                    <Img
                      src="images/img_info.svg"
                      className="h-[75px] ml-[undefinedpx] my-[auto] w-[auto] z-[1]"
                      alt="info One"
                    />
                  </div>
                  <Img
                    src="images/img_vector.svg"
                    className="absolute bottom-[0] h-[37px] left-[12%] w-[auto]"
                    alt="Vector Seven"
                  />
                  <Img
                    src="images/img_file.svg"
                    className="absolute bottom-[0] h-[40px] left-[11%] w-[auto]"
                    alt="file"
                  />
                </div>
                <Img
                  src="images/img_file_white_a700.svg"
                  className="h-[12px] mb-[26px] ml-[undefinedpx] mt-[auto] w-[auto] z-[1]"
                  alt="file One"
                />
                <Img
                  src="images/img_file_bluegray_900.svg"
                  className="h-[16px] mb-[24px] ml-[undefinedpx] mt-[auto] w-[auto] z-[1]"
                  alt="file Two"
                />
                <Img
                  src="images/img_volume_orange_300.svg"
                  className="h-[26px] ml-[-2px] mr-[2px] mt-[24px] w-[auto] z-[1]"
                  alt="volume One"
                />
                <Img
                  src="images/img_contrast.svg"
                  className="h-[29px] ml-[undefinedpx] mt-[23px] w-[auto] z-[1]"
                  alt="contrast"
                />
              </div>
              <div className="md:h-[415px] sm:h-[415px] h-[568px] mb-[127px] md:ml-[0] sm:ml-[0] ml-[241px] mr-[17px] relative md:w-[100%] sm:w-[100%] w-[80%]">
                <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[76%]">
                  <div className="flex flex-col gap-[320px] md:gap-[40px] sm:gap-[40px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[10px] justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] sm:ml-[0] ml-[27px] md:w-[100%] sm:w-[100%] w-[97%]">
                        <Img
                          src="images/img_computer.svg"
                          className="h-[97px] w-[97px]"
                          alt="computer"
                        />
                        <Text
                          className="mt-[12px] text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          YOOREED{" "}
                        </Text>
                      </div>
                      <Text
                        className="font-semibold text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        LES INTERNAUTES
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-center justify-start md:w-[100%] sm:w-[100%] w-[19%]">
                      <Img
                        src="images/img_folder.svg"
                        className="h-[94px] w-[94px]"
                        alt="folder"
                      />
                      <Text
                        className="font-semibold text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        LES ENTREPRISES
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[2%] flex flex-col gap-[7px] items-center justify-start right-[24%] w-[11%]">
                  <Img
                    src="images/img_computer_bluegray_900.svg"
                    className="h-[96px] w-[96px]"
                    alt="computer One"
                  />
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    LES CLIENTS
                  </Text>
                </div>
                <Text
                  className="absolute font-normal leading-[24.00px] not-italic right-[0] text-left text-white_A700 top-[13%]"
                  as="h6"
                  variant="h6"
                >
                  Gérer les utilisateurs de la plateforme (clients et
                  entreprises).
                  <br />
                  Gérer les contrats entre l’entreprise et les groupements de
                  métiers.
                  <br />
                  Gérer les offres des entreprises (accepter ou refuser les
                  offres)
                  <br />
                  Consulter les statistiques des entreprises.
                  <br />
                  Gérer les bons de commandes.
                </Text>
              </div>
            </div>
          </div>
          <footer className="absolute bg-red_A200 bottom-[0] flex font-poppins inset-x-[0] items-center justify-center mx-[auto] w-[100%]">
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
                    Rue de la cite, Sousse 4020 Seofy@mail.com Tél.: 00 216 98
                    100 100
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
                      onClick={handleNavigate7}
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
      </div>
    </>
  );
};

export default HomepagePage;
