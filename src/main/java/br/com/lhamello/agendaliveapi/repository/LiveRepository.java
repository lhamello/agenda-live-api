package br.com.lhamello.agendaliveapi.repository;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.lhamello.agendaliveapi.document.LiveDocument;

public interface LiveRepository extends MongoRepository<LiveDocument, String> {

  Page<LiveDocument> findByLiveDateAfterOrderByLiveDateAsc(final LocalDateTime date, final Pageable pageable);

  Page<LiveDocument> findByLiveDateBeforeOrderByLiveDateDesc(final LocalDateTime date, final Pageable pageable);
}
