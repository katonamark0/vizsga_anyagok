CREATE DATABASE IF NOT EXISTS zene
CHARACTER SET utf8mb4
COLLATE utf8mb4_hungarian_ci;
USE zene;

DROP TABLE IF EXISTS playlist_songs;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    
    UNIQUE (name) 
) ENGINE=InnoDB;


CREATE TABLE songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_id INT NOT NULL,
    duration INT NOT NULL,
    
    CONSTRAINT fk_songs_artist
        FOREIGN KEY (artist_id)
        REFERENCES artists(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;


CREATE INDEX idx_songs_artist ON songs(artist_id);


CREATE TABLE playlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    
    UNIQUE (name)
) ENGINE=InnoDB;


CREATE TABLE playlist_songs (
    playlist_id INT,
    song_id INT,

    PRIMARY KEY (playlist_id, song_id),

    CONSTRAINT fk_ps_playlist
        FOREIGN KEY (playlist_id)
        REFERENCES playlists(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_ps_song
        FOREIGN KEY (song_id)
        REFERENCES songs(id)
        ON DELETE CASCADE
) ENGINE=InnoDB;


CREATE INDEX idx_ps_song ON playlist_songs(song_id);


INSERT INTO artists (name) VALUES 
('Gyuris'),
('Mac Miller'),
('Daniel Caesar');

INSERT INTO songs (title, artist_id, duration) VALUES
('New Gatti', 1, 150),
('Surf', 2, 330),
('Who knows', 3, 194);

INSERT INTO playlists (name) VALUES
('Kedvencek'),
('Chill');

INSERT INTO playlist_songs (playlist_id, song_id) VALUES
(1, 1),
(1, 2),
(2, 3);



