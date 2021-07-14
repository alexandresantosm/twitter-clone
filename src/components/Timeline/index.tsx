import { TimelineNav } from './TimelineNav';

import {
  Container,
  Content,
  TweetList,
  TweetItem,
  Avatar,
  Info,
  Actions,
} from './styles';

export function Timeline() {
  return (
    <Container>
      <Content>
        <TimelineNav />

        <TweetList>
          <TweetItem>
            <Avatar src="images/avatar.png" alt="Avatar" />
            <Info>
              <strong>
                Benoît Vrins <span>@Exibit</span> <span>26 janv.</span>
              </strong>
              <p>
                I just published &quot;The Belgian Red Cross website : backstage
                of a revamp like no other&quot;
              </p>

              <a href="#">translated from French</a>

              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1626180583122-c256e0ea54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Image"
                />
                <div className="legend">
                  <strong>
                    The Belgian Red Cross website : backstage of a revamp like
                    no other
                  </strong>
                  <p>
                    It&lsquo;s a pleasure for the whole team to announce today
                    the release of the new Belgian Red Cross website. It was an
                    opportunity for Spade to
                  </p>
                  <span>bordet.be</span>
                </div>
              </div>

              <Actions>
                <a href="">
                  <img src="images/comments.svg" alt="Comments" />
                  <span>3</span>
                </a>
                <a href="">
                  <img src="images/retweet.svg" alt="Retweet" />
                  <span>6</span>
                </a>
                <a href="">
                  <img src="images/like.svg" alt="Like" />
                  <span>2</span>
                </a>
                <a href="">
                  <img src="images/message.svg" alt="Message" />
                  <span>12</span>
                </a>
              </Actions>
            </Info>
          </TweetItem>
          <TweetItem>
            <Avatar src="images/avatar.png" alt="Avatar" />
            <Info>
              <div className="retweet">
                <img src="images/retweet.svg" alt="Retweet" />
                <span>Benoît Vrins has retweeted</span>
              </div>
              <strong>
                Benoît Vrins <span>@Exibit</span> <span>26 janv.</span>
              </strong>
              <p>
                app <a href="#">@itsmeDigitalID</a> désinstallée puis
                réinstallée, comment faire pour retrouver son compte ? Ma banque
                dit que mon token existe déja #UX
              </p>

              <Actions>
                <a href="">
                  <img src="images/comments.svg" alt="Comments" />
                  <span>3</span>
                </a>
                <a href="">
                  <img src="images/retweet.svg" alt="Retweet" />
                  <span>6</span>
                </a>
                <a href="">
                  <img src="images/like.svg" alt="Like" />
                  <span>2</span>
                </a>
                <a href="">
                  <img src="images/message.svg" alt="Message" />
                  <span>12</span>
                </a>
              </Actions>
            </Info>
          </TweetItem>
          <TweetItem>
            <Avatar src="images/avatar.png" alt="Avatar" />
            <Info>
              <strong>
                Benoît Vrins <span>@Exibit</span> <span>26 janv.</span>
              </strong>
              <p>
                I just published &quot;The Belgian Red Cross website : backstage
                of a revamp like no other&quot;
              </p>

              <a href="#">translated from French</a>

              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
                  alt="Image"
                />
                <div className="legend">
                  <strong>
                    The Belgian Red Cross website : backstage of a revamp like
                    no other
                  </strong>
                  <p>
                    It&lsquo;s a pleasure for the whole team to announce today
                    the release of the new Belgian Red Cross website. It was an
                    opportunity for Spade to
                  </p>
                  <span>bordet.be</span>
                </div>
              </div>

              <Actions>
                <a href="">
                  <img src="images/comments.svg" alt="Comments" />
                  <span>3</span>
                </a>
                <a href="">
                  <img src="images/retweet.svg" alt="Retweet" />
                  <span>6</span>
                </a>
                <a href="">
                  <img src="images/like.svg" alt="Like" />
                  <span>2</span>
                </a>
                <a href="">
                  <img src="images/message.svg" alt="Message" />
                  <span>12</span>
                </a>
              </Actions>
            </Info>
          </TweetItem>
        </TweetList>
      </Content>
    </Container>
  );
}
